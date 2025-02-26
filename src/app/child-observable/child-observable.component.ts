import {Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child-observable',
  standalone: true,
  imports: [ ],
  template: `
  <!-- {{ expenses$ | async }} -->
    
    <div>
      <h3>{{ user.name }} : {{ user.id }}</h3>
      <p class="username">Username: {{ user.username }}</p>
      <p class="email">Email: {{ user.email }}</p>
      <button (click)="fetchData()">Fetch Data</button>
    </div>

    <button 
        (click)="sendNotification()">
        Message to Parent
    </button>`,
})
export class ChildObservableComponent {
  @Output()  // Send to Parent
  notifyParent: EventEmitter<string> = new EventEmitter();

  @Output()  // Send to Parent
  fetchDataEvent = new EventEmitter<void>(); 

  // @Input() // Receive from Parent
  // expenses$: Observable<any[]>;

  sendNotification() {
    this.notifyParent.emit("Some value to send to the parent");
  }

  fetchData() {
    this.fetchDataEvent.next();
  }

}
