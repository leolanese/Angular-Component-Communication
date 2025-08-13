import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentContructorInputOnchangesComponent } from "./child-contructor-input-onchanges/parent-contructor-input-onchanges.component";
import { ParentObservableComponent } from './child-observable/parent-observable.component';
import { ParentPureSignalComponent } from './child-pure-signal/parent-pure-signal.component';
import { ParentSignalComponent } from "./child-signal/parent-signal.component";
import { ParentComponent } from "./child-simple/parent-simple.component";

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
    <app-parent-simple />
    <hr>

    <h2>{{ title3 }}</h2>
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
  title: string = 'Communicate between Prent and Child components: Observables Vs Signal';

  title1 = '🔴 1. Observable-based Passing and accessing data: constructor, ngOnInit / ngOnChanges (safe) ';
  title2 = '🔴 2. Observable-based Message P->C communication with SoC (Simple)';
  title3 = '🟡 3. Hybrid Observable & signal based P->C communication from API service, TS generic type, distinctUntilChanged, takeUntilDestroyed with SoC (Observable)';
  title4 = '🟡 4. Hybrid Observable & signal based Input & Output signal P->C communication from API with SoC';
  title5 = '🟢 5. Pure Signal based P->C input signal for communication from API with SoC';
}
