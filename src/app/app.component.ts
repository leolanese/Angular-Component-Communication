import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentContructorInputOnchangesComponent} from "./child-contructor-input-onchanges/parent-contructor-input-onchanges.component";
import {ParentObservableComponent} from './child-observable/parent-observable.component';
import {ParentComponent} from "./child/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentObservableComponent, ParentComponent, ParentContructorInputOnchangesComponent],
  template: `
    <h1>{{ title }}</h1>
<hr>
    <h2>{{ title0 }}</h2>
    <app-parent-contructor-input-onchanges />
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
  title: string = '@Input/@Output playground';

  title0 = '@input/@output passing and accessing data: constructor, ngOnChanges, ngOnInit (safe)';
  title1 = '@input/@output message communication';
  title2 = '@input/@output Observable communication from API service';
}
