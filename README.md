# Angular Input

- /`child-contructor-input-onchanges`
Accessing passed values from contructor() (not safe), @Input() and ngOnChanges() with SoC

- /`child` 
passing P <-> C @Input/@Output with SoC

- Child-observable: Passing Observable from P -> C + Reusable Generic Service

TODO: 
- Child-signal: input signal

---

## NOTES:
> When passing values from a P -> C component using the `@Input`, `these values are not available in the constructor` = Avoids running Angular-specific logic or accessing @Input properties, as they are not yet set.

> If you need to react to changes in @Input values beyond initialization, consider using the `ngOnChanges()` lifecycle hook

### constructor()
- Called first, before any Angular lifecycle hooks.
- Used to initialise the component instance.
- Runs before Angular has fully initialized the component.
- `Not safe access @Input values`

### ngOnInit()

- called after the constructor, after the first ngOnChanges()
- `Safe for access @Input` values
- Runs after the constructor and after Angular sets up the component's bindings.

---

## @for instead *ngFor()

> The key difference is that `@for` loops over the array value directly, while `*ngFor` gives you the array element value.

Feature: Syntax
- `ngFor`: `*ngFor="let item of items"`
- `@for`: `@for="let i from X to Y"`


```js
// instead of
<ul>
  <li *ngFor="let suggestion of suggestions">{{ suggestion }}</li>
</ul>

// better do
<ul>
  @for (let suggestion of suggestions) {
    <li>{{ suggestion }}</li>
  }
</ul>
```

## @for with | async pipe

```js
// instead
<div *ngIf="users$ | async as users; else loading">
  <app-dummy 
     *ngFor="let user of users" 
     [user]="user" 
     (fetchDataEvent)="fetchData()"
  />
</div>
<ng-template #loading><h2>Loading...</h2></ng-template>  

// better do
@for(user of users$ | async; track user){
    <app-dummy 
        [user]="user" 
        (fetchDataEvent)="fetchData()"
    />
} @empty {
    <h2>Loading...</h2> 
}
```

## @for with $index

```js
@Component({
    template: `
        @for(fruit of fruits; track fruit; let index = $index) {
            <div>{{ fruit }} {{ index }}</div>
        }

    `,
})
export class FruitComponent {
    fruits = ['apple', 'lemon'];
}
```

## @for with $first and $last

```js
@Component({
    template: `
        @for(fruit of fruits; track fruit; let first = $first, last = $last) {
            <div>First: {{ first }}: Last {{ last }}</div>
        }
    `,
})
export class FruitComponent {
    fruits = ['apple', 'lemon'];
}

// <div>First: true: Last false</div>
// <div>First: false: Last true</div>
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
