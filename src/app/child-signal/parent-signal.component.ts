import {CommonModule} from '@angular/common';
import {Component,DestroyRef,inject,signal,WritableSignal} from '@angular/core';
import {Observable} from 'rxjs';
import {APIService} from '../api.service';
import {ChildSignalComponent} from "./child-signal.component";

type ApiTerm = 'users' | 'products' | 'orders';

@Component({
  selector: 'app-parent-signal',
  standalone: true,
  imports: [CommonModule, ChildSignalComponent],
  template: `
    <!-- <app-child-signal [message]="apiService.posts()"></app-child-signal> -->
    <button (click)="fetchPosts()">Load Posts</button>


      <!-- <app-child-signal 
          [postsSignal]="apiService.postsSignal()"></app-child-signal> -->
      <app-child-signal [postsSignal]="postsSignal"></app-child-signal>
  `,
})
export class ParentSignalComponent {
  data$!: Observable<any[]> 
  parentMessage: string = 'Hello from Parent!';

  postsSignal: WritableSignal<any[]> = signal([]);
  
  destroyRef = inject(DestroyRef);
  apiService = inject(APIService);

  ngOnInit(): void {
   // this.fetchData<string>('users');
    // this.fetchData<string>('products');
    // this.fetchData<string>('orders');
  }

  updateMessage() {
    this.parentMessage = 'Updated Message from Parent!';
  }

  fetchPosts() {
    this.apiService.getPosts().subscribe((data) => {
      this.postsSignal.set(data); // Update the signal with API data
    });
  }

}
