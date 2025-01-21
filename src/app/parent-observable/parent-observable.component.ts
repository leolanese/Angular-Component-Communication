import {Component,DestroyRef,inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Observable,Subject,catchError,debounceTime,distinctUntilChanged,of,switchMap} from 'rxjs';
import {APIService} from '../api.service';
import {ChildObservableComponent} from "../child-observable/child-observable.component";

@Component({
  selector: 'app-parent-observable',
  standalone: true,
  imports: [ChildObservableComponent],
  template: `
    <app-child-observable
      (notifyParent)="getNotification($event)"  
    />
  `,
})
export class ParentObservableComponent {
  // Initialise to an empty observable
  users$!: Observable<any[]> 

  // Subject to trigger data fetch
  private fetchDataSubject$ = new Subject<void>();

  #destroyRef = inject(DestroyRef);
  #apiService = inject(APIService)

  ngOnInit(): void {
    this.fetchData();
  }

  getNotification(event: string) {
    console.log(event);
  }

  fetchData() {
    // Reusable HTTP Service with RxJS operators
    // Replace redundant HTTP methods in your app with this service to improve readability and consistency
    const term = 'users'; // Define the term variable
    this.users$ = this.#apiService.get<string[]>(`${this.#apiService.apiRootUrl}${term}`).pipe(
      debounceTime(300), // Wait for user to stop typing for 300ms
      distinctUntilChanged(), // Only trigger if the value has changed
      //  if you expect subsequent triggers
      switchMap(() => this.#apiService.get<string[]>(`${this.#apiService.apiRootUrl}${term}`).pipe(
        takeUntilDestroyed(this.#destroyRef),
        catchError(error => {
          return of([]); // Return empty array in case of error
        })
      ))
    );
  }
}
