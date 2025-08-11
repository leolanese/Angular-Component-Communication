import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ApiService } from '../api.signal.service';
import { User } from '../types/user.types';
import { UserCardPureSignalComponent } from './card-pure-signal.component';

@Component({
  selector: 'app-user-pure-signal',
  imports: [UserCardPureSignalComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (apiService.isLoading()) {
      <div class="loading-state">
        <p>{{ loadingMessage() }}</p>
      </div>
    } @else if (apiService.isError()) {
      <div class="error-state">
        <p>{{ errorMessage() }}</p>
        <p class="error-details">{{ apiService.isError() | json }}</p>
      </div>
    } @else {
      @if (apiService.items().length) {
        <section class="card-container" role="list">
          @for (user of apiService.items(); track user.id) {
            
            <!-- Parent → Child: P passes user data to each card: [user]="user" -->
            <!-- Child → Parent: C emits user selection events: (userSelected)="handleUserSelection($event)" -->
            <app-user-card-pure-signal
              [user]="user" 
              (userSelected)="handleUserSelection($event)" 
            />

          }
        </section>
      } @else {
        <div class="empty-state">
          <p>{{ emptyMessage() }}</p>
        </div>
      }
    }
  `,
  styles: `
    .loading-state,
    .error-state,
    .empty-state {
      text-align: center;
      padding: 2rem;
    }

    .error-details {
      font-size: 0.875rem;
      color: #dc3545;
      margin-top: 0.5rem;
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  `
})
export class UserPureSignalComponent {
  // UserPureSignalComponent = Parent Component
  // UserCardPureSignalComponent = Child Component

  readonly apiService = inject(ApiService);
   
  // Optional inputs with default values
  readonly loadingMessage = input('Loading users...');
  readonly errorMessage = input('An error occurred while loading users');
  readonly emptyMessage = input('No users found');
  readonly showAlert = input(true); // to show alert on user selection
   
  protected handleUserSelection(user: User): void {
    console.log('User selected in Parent Component:', user);
  }

}