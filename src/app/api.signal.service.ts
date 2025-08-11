import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { User } from './types/user.types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  // Service manages shared state across components
  private readonly selectedUserSignal = signal<User | null>(null);

  // HTTP resource for fetching users
  private readonly usersResource = httpResource<User[]>(() => ({
    url: `${this.baseUrl}/users`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    },
    defaultValue: []
  }));

  // Computed signals for reactive state management
  readonly isLoading = this.usersResource.isLoading;
  readonly items = computed(() => this.usersResource.value() ?? []);
  readonly isError = computed(() => this.usersResource.error() as HttpErrorResponse | null);
  readonly selectedUser = this.selectedUserSignal.asReadonly();

  // Method to update the selected user
  setSelectedUser(user: User): void {
    this.selectedUserSignal.set(user);
    console.log('User selected in service:', user);
  }

  // Method to clear selected user
  clearSelectedUser(): void {
    this.selectedUserSignal.set(null);
  }
} 