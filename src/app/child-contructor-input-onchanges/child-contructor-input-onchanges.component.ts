import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-child-contructor-input-onchanges',
    standalone: true,
    imports: [CommonModule],
    template: `<p>{{ inputValue }}</p>`
})
export class ChildContructorInputOnchangesComponent implements OnInit, OnChanges {
  @Input() inputValue!: string;

  constructor() {
    console.log('Constructor NOT safe:', this.inputValue); // Undefined
  }

  ngOnChanges(): void {
    console.log('ngOnChanges safe:', this.inputValue); // updated `@Input` value
  }

  ngOnInit(): void {
    console.log('ngOnInit safe:', this.inputValue); // final `@Input` value
  }
}
