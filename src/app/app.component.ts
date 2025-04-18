import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentContructorInputOnchangesComponent } from "./child-contructor-input-onchanges/parent-contructor-input-onchanges.component";
import { ParentObservableComponent } from './child-observable/parent-observable.component';
import { UserComponent } from './child-pure-signal/user-pure-signal.component';
import { ChildSignalComponent } from "./child-signal/child-signal.component";
import { ParentSignalComponent } from "./child-signal/parent-signal.component";
import { ParentComponent } from "./child/parent.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ParentObservableComponent, ParentComponent, 
      ParentContructorInputOnchangesComponent, ChildSignalComponent, ParentSignalComponent,
      UserComponent
    ],
    template: `
    <h1>{{ title }}</h1>
<hr>
    <h2>{{ title0 }}</h2>
    <app-parent-contructor-input-onchanges />
<hr>
    <h2>{{ title1 }}</h2>
    <!-- @input/@output message communication -->
    <app-parent />
<hr>
    <h2>{{ title2 }}</h2>
    <!-- observable @input/@output Observable communication -->
    <app-parent-observable /> 
<hr>
    <h2>{{ title3 }}</h2>  
    <app-parent-signal />
<hr>
    <h2>{{ title4 }}</h2>
    <app-user-pure-signal />

    <router-outlet />
  `,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Observables and Signal using @Input/@Output playground and Signal Input/Output';

  title0 = 'Passing and accessing data: constructor, ngOnChanges, ngOnInit (safe)';
  title1 = 'Message P->C communication with SoC';
  title2 = 'Observable P->C communication from API service with SoC';
  title3 = 'Hybrid Input signal P->C communication from API with SoC';
  title4 = 'Pure signal P->C communication from API with SoC';
}
