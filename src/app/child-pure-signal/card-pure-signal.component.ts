import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { ApiService } from '../api.signal.service';
import { User } from '../types/user.types';

@Component({
  selector: 'app-user-card-pure-signal',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>Panrent</p>
    <article 
      class="card" 
      role="listitem"
      tabindex="0"
      (click)="handleCardClick()"
      (keydown.enter)="handleCardClick()"
      (keydown.space)="handleCardClick()"
    >
      <div class="card-content">
        <h3 class="user-name">{{ user().name }}</h3>
        <p class="user-email">{{ user().email }}</p>
        <p class="user-company">{{ user().company.name }}</p>
      </div>
    </article>
  `,
  styles: `
    .card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      background: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      border-color: #007bff;
    }

    .card:focus {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .user-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .user-email {
      font-size: 0.875rem;
      color: #666;
      margin: 0;
    }

    .user-company {
      font-size: 0.75rem;
      color: #888;
      margin: 0;
      font-style: italic;
    }
  `
})
export class UserCardPureSignalComponent {
  // Input signal for user data
  readonly user = input.required<User>();
  
  // Output signal for user selection
  readonly userSelected = output<User>();

  private readonly apiService = inject(ApiService);

  protected handleCardClick(): void {
    this.userSelected.emit(this.user());
    this.apiService.setSelectedUser(this.user());
  }
}