import {HttpClient} from '@angular/common/http';
import {Injectable,computed,inject,signal} from '@angular/core';
import {Observable,catchError,debounceTime,shareReplay,throwError,} from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class APIService {
  // constructor-based dependency injection
  http = inject(HttpClient);
  apiRootUrl = "https://jsonplaceholder.typicode.com/";

  // Signal declarations with initial states
  public postsSignal = signal<Post[]>([]);
  public errorSignal = signal<string | null>(null);

  // Computed signals for derived state
  readonly posts = computed(() => this.postsSignal());
  readonly error = computed(() => this.errorSignal());
  
  // Generic method to make GET requests with optional caching
  // map will not be inside as it is generic
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      debounceTime(300),
      shareReplay(1), // Cache the response to avoid multiple requests
      catchError((error) => {
        return throwError(() => new Error('Failed to fetch data.'));
      })
    );
  }

  // Fetch posts using the generic method
  getToSignal() {
    this.get<Post[]>(`${this.apiRootUrl}posts`).subscribe({
      next: (data) => this.postsSignal.set(data), // Update the posts signal
      error: (err) => console.error(err), // Update the error signal
    });
  }

    getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  
}