import {AsyncPipe} from '@angular/common';
import {Component,DestroyRef,inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Observable,distinctUntilChanged,switchMap} from 'rxjs';
import {APIService} from '../api.service';
import {ChildObservableComponent} from "./child-observable.component";

type ApiTerm = 'users' | 'products' | 'orders';

@Component({
  selector: 'app-parent-observable',
  standalone: true,
  imports: [AsyncPipe, ChildObservableComponent],
  template: `
    <app-child-observable
      (notifyParent)="getNotification($event)"  
    />

    @for(user of data$ | async; track user){
      <div>
        <h3>id: {{ user.id }}</h3>
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>  
      </div>
    } @empty {
      <h2>Loading...</h2> 
    }
    
  `,
})
export class ParentObservableComponent {
  // Initialise to an empty observable
  data$!: Observable<any[]> 

  // Subject to trigger data fetch
  // private fetchDataSubject$ = new Subject<void>();

  destroyRef = inject(DestroyRef);
  apiService = inject(APIService)

  ngOnInit(): void {
    this.fetchData<string>('users');
    // this.fetchData<string>('products');
    // this.fetchData<string>('orders');
  }

  getNotification(event: string) {
    console.log(event);
  }

  // smart component fully reusable with generic type
  fetchData<T>(term: ApiTerm): void {
    const url = `${this.apiService.apiRootUrl}${term}`;

    this.data$ = this.apiService.get<T[]>(url).pipe(
      distinctUntilChanged(), // Only trigger if the value has changed
      switchMap(() => this.apiService.get<T[]>(url).pipe(
        takeUntilDestroyed(this.destroyRef), // Efficient cleanup for subscriptions
      ))
    );
  }

}
