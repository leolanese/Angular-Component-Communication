import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentObservableComponent} from './parent-observable/parent-observable.component';
import {ParentComponent} from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentObservableComponent, ParentComponent],
  template: `

    <app-parent></app-parent>

    <app-parent-observable></app-parent-observable>

    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
