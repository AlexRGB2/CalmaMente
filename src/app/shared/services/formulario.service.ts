import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FlaskResponse } from '../models/response.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  BASE_URL = environment.API_URL + '/respuestas';

  constructor(private http: HttpClient) {}

  sendForm(questions: { [key: string]: string }): Observable<FlaskResponse> {
    return this.http.post<FlaskResponse>(this.BASE_URL, questions);
  }
}
