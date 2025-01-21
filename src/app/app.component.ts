import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentObservableComponent} from './parent-observable/parent-observable.component';
import {ParentComponent} from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentObservableComponent, ParentComponent],
  template: `
    <p>{{ title }}</p>
<hr>
    <h2>{{ title1 }}</h2>
    <!-- @input/@output message communication -->
    <app-parent></app-parent>
<hr>
    <h2>{{ title2 }}</h2>
    <!-- observable @input/@output Observable communication -->
    <app-parent-observable></app-parent-observable>
<hr>
    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '@Input/@Output, Passing Observable from P -> C, Reusable Generic Service ';

  title1 = '@input/@output message communication';
  title2 = '@input/@output Observable communication from API service';
}
