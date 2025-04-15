import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { ApiService } from '../api.signal.service';

@Component({
  selector: 'app-user-card-pure-signal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card" 
      (click)="userSelected.emit(user())" >
      <div class="card-content">
        <p>{{ user().name }}</p>
      </div>
    </article>
  `,
  styles: `
    .card-content {
      display: flex;
      flex-direction: column;
      gap: .5rem;
       font-size: .3rem;
    }
    p {
      color: #666;
      font-size: .3rem;
      color: #444;
    }
  `
})
export class UserCardComponent {
  // Input signal that replace: @Input() user!: User;
  readonly user = input<any>();
  // Output signal that replace: @Output() userSelected = new EventEmitter<any>();
  readonly userSelected = output<any>();

  private readonly serviceApi = inject(ApiService);

  // onCardClick(): void {
  //   this.serviceApi.setSelectedUser(this.user());
  // }
}