import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentContructorInputOnchangesComponent} from "./child-contructor-input-onchanges/parent-contructor-input-onchanges.component";
import {ParentObservableComponent} from './child-observable/parent-observable.component';
import {ChildSignalComponent} from "./child-signal/child-signal.component";
import {ParentSignalComponent} from "./child-signal/parent-signal.component";
import {ParentComponent} from "./child/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentObservableComponent, ParentComponent, ParentContructorInputOnchangesComponent, ChildSignalComponent, ParentSignalComponent],
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
    <!-- <app-parent-observable /> -->
<hr>
    <h2>{{ title3 }}</h2>  
    <app-parent-signal />

    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '@Input/@Output playground';

  title0 = 'passing and accessing data: constructor, ngOnChanges, ngOnInit (safe)';
  title1 = 'message P->C communication with SoC';
  title2 = 'Observable P->C communication from API service with SoC';
  title3 = 'input signal P->C communication from API with SoC';
}
