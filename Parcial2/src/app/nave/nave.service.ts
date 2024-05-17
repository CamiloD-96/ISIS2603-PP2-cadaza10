import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from './Nave';

@Injectable({
  providedIn: 'root'
})
export class NaveService {
  private apiUrl = environment.baseUrl;
constructor(private http: HttpClient) { }
getNaves(): Observable<Nave[]> {
  return this.http.get<Nave[]>(this.apiUrl);
}
}
