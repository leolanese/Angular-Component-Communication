import { isPlatformBrowser, isPlatformServer, JsonPipe } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../api.signal.service';
import { UserCardComponent } from './card-pure-signal.component';

@Component({
  selector: 'app-user-pure-signal',
  standalone: true,
  imports: [UserCardComponent, JsonPipe],
  template: `
    @if (isLoading()) {
      <p>Loading...</p>
    } @else if (isError()){
        <p>An error occurred: {{ isError() | json }}</p>
    } @else {
      @if (items().length) {
        <section class="card-container">
          @for (item of items(); track item) {
            <app-user-card-pure-signal
              [user]="item" 
              (userSelected)="onUserSelected($event)" 
            />
          }
        </section>
      } @else {
        <div>No elements found</div>
      }
   }
  `,
})
export class UserComponent {
  private readonly serviceApi = inject(ApiService);
  private readonly platformId = inject(PLATFORM_ID);
   
  // Signals to support the template
  isError = this.serviceApi.isError;
  isLoading = this.serviceApi.isLoading;
  items = this.serviceApi.items;

  onUserSelected(user: any): void {
    console.log('User selected in Parent Component:', user);
    console.log('isBrowser:', this.isBrowser());
    console.log('isServer:', this.isServer());
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}