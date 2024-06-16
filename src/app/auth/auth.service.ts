import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, of, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/v1/api'

  headers = new HttpHeaders({
    'ngrok-skip-browser-warning': 'true',
  })

  private tokenKey = 'auth-token'

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<void | { token: string }> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/user/login`, { email, password })
      .pipe(
        tap((response) => localStorage.setItem(this.tokenKey, response.token)),
        catchError(this.handleError<void>('login'))
      )
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null
  }
}
