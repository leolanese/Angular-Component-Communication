import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentContructorInputOnchangesComponent } from "./child-contructor-input-onchanges/parent-contructor-input-onchanges.component";
import { ParentObservableComponent } from './child-observable/parent-observable.component';
import { ParentPureSignalComponent } from './child-pure-signal/parent-pure-signal.component';
import { ParentSignalComponent } from "./child-signal/parent-signal.component";
import { ParentComponent } from "./child/parent.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ParentObservableComponent, ParentComponent, 
      ParentContructorInputOnchangesComponent, ParentSignalComponent,
      ParentPureSignalComponent
    ],
    template: `
    <h1>{{ title }}</h1>
    <hr>
    <h2>{{ title1 }}</h2>
    <app-parent-contructor-input-onchanges />
    <hr>
    <h2>{{ title2 }}</h2>
    <!-- @input/@output message communication -->
    <app-parent />
    <hr>
    <h2>{{ title3 }}</h2>
    <!-- observable @input/@output Observable communication -->
    <app-parent-observable /> 
    <hr>
    <h2>{{ title4 }}</h2>  
    <app-parent-signal />
    <hr>
    <h2>{{ title5 }}</h2>
    <app-parent-pure-signal />
    
    <router-outlet />
  `,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Observables Vs Signal using @Input/@Output playground and Signal Input/Output';

  title1 = '1. Passing and accessing data: constructor, ngOnChanges, ngOnInit (safe)';
  title2 = '2. Message P->C communication with SoC';
  title3 = '3. Observable P->C communication from API service with SoC';
  title4 = '4. Hybrid Input signal P->C communication from API with SoC';
  title5 = '5. Pure signal P->C input signal for communication from API with SoC';
}
