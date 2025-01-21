import {Component} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <!-- all the Property binding [] / Event binding () are declared as @Input/@Ouput in the C -->
    <app-child 
      [toChildMessage]="toChildMessage" 
      (toParentMessage)="onParentMessage($event)"
      (toParentPackage)="onParentPackage($event)"
    />
  `,
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  title = 'angular-input';
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
