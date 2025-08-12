import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [CommonModule],
    template: `
      <button 
        (click)="sendValues($event)"> Send Data </button>
  `
})
export class ChildComponent implements OnInit {
  @Input()
  toChildMessage: string|undefined;

  @Output()
  toParentMessage: EventEmitter<string> = new EventEmitter();
  outputMessage = "Message from Child -> Parent";

  @Output()
  toParentPackage: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit() {
    console.log(this.toChildMessage);
    this.toParentMessage.emit(this.outputMessage);
  }

  sendValues(event: Event): void {
    this.toParentPackage.emit(event);
  }
}
