import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = '/v1/api'

  headers = new HttpHeaders({
    'ngrok-skip-browser-warning': 'true',
  })

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`, { headers: this.headers })
  }

  generateActivity(body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/activity`, body)
  }
}
