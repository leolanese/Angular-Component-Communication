import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent-simple',
    standalone: true,
    imports: [CommonModule, ChildComponent],
    template: `
      <p>{{ title }}</p>
      <app-child 
        [toChildMessage]="toChildMessage" 
        (toParentMessage)="onParentMessage($event)"
        (toParentPackage)="onParentPackage($event)"
      />
  `
})
export class ParentComponent {
  title = '/child';
  toChildMessage = 'Message from Parent -> Child';

  onParentMessage(event: unknown) {
    console.log(event);
  }

  onParentPackage(event: Event) {
    console.log(event);
  } 

  getNotification(event: string) {
    console.log(event);
  }
}
