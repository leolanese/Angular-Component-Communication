import {Component} from '@angular/core';
import {ChildSignalComponent} from "./child-signal.component";

@Component({
  selector: 'app-parent-signal',
  standalone: true,
  imports: [ChildSignalComponent],
  template: 
  `<app-child-signal></app-child-signal>'`
  ,
})
export class ParentSignalComponent {

}
