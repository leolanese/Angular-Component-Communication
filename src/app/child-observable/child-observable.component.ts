import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
    selector: 'app-child-observable',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div>
      <h3>{{ user().name }} : {{ user().id }}</h3>
      <p class="username">Username: {{ user().username }}</p>
      <p class="email">Email: {{ user().email }}</p>
      <button (click)="fetchData()">Fetch Data</button>
    </div>

    <button 
        (click)="sendNotification()">
        Message to Parent
    </button>`
})
export class ChildObservableComponent {
  @Output()  // Send to Parent
  notifyParent: EventEmitter<string> = new EventEmitter();

  @Output()  // Send to Parent
  fetchDataEvent = new EventEmitter<void>(); 

  // Signal to store user data
  user = signal<User>({
    id: 0,
    name: '',
    username: '',
    email: ''
  });

  sendNotification() {
    this.notifyParent.emit("Some value to send to the parent");
  }

  fetchData() {
    this.fetchDataEvent.emit();
  }
}
