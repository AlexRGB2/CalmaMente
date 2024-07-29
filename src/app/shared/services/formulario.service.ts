import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CSVResponse, FlaskResponse } from '../models/response.models';
import { Observable } from 'rxjs';
import { Filtros } from '../models/csv.models';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  BASE_URL = environment.API_URL + '/respuestas';

  constructor(private http: HttpClient) {}

  sendForm(questions: { [key: string]: string }): Observable<FlaskResponse> {
    return this.http.post<FlaskResponse>(this.BASE_URL, questions);
  }

  getCSV(filtros: Filtros): Observable<CSVResponse> {
    return this.http.post<CSVResponse>(this.BASE_URL + '/csv', filtros);
  }
}
