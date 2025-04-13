import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildContructorInputOnchangesComponent } from "./child-contructor-input-onchanges.component";

@Component({
    selector: 'app-parent-contructor-input-onchanges',
    standalone: true,
    imports: [CommonModule, ChildContructorInputOnchangesComponent],
    template: `<app-child-contructor-input-onchanges [inputValue]="parentValue" />`
})
export class ParentContructorInputOnchangesComponent {
  parentValue = 'Hello from Parent';
}
