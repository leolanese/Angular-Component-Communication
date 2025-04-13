import { CommonModule } from '@angular/common';
import { Component, input, WritableSignal } from '@angular/core';
import { Post } from '../api.service';

@Component({
    selector: 'app-child-signal',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div>
      <pre>{{ this.stringify(message()) }}</pre>
    </div>

    <div *ngFor="let user of postsSignal()?.()">
      <h3>id: {{ user.id }}</h3>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  `
})
export class ChildSignalComponent {
  message = input<Post[]>();
  postsSignal = input<WritableSignal<any[]>>();

  stringify(obj: any): string {
    return JSON.stringify(obj, null, 2);
  }
}
