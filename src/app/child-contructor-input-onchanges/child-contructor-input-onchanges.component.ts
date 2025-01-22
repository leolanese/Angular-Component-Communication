import {Component,Input,OnChanges,OnInit,} from '@angular/core';

@Component({
  selector: 'app-child-contructor-input-onchanges',
  standalone: true,
  imports: [],
  template: `<p>{{ inputValue }}</p>`
})
export class ChildContructorInputOnchangesComponent implements OnInit, OnChanges {
  @Input() inputValue!: string;

  constructor() {
    console.log('Constructor ChildContructorInputOnchangesComponent :', this.inputValue); // Undefined
  }

  ngOnChanges(): void {
    console.log('ngOnChanges ChildContructorInputOnchangesComponent:', this.inputValue); // Logs updated `@Input` value
  }

  ngOnInit(): void {
    console.log('ngOnInit ChildContructorInputOnchangesComponent:', this.inputValue); // Logs final `@Input` value
  }
}
