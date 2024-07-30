import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FlaskResponse } from '../models/response.models';
import { Observable } from 'rxjs';
import { Filtros } from '../models/csv.models';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  BASE_URL = environment.API_URL + '/respuestas';

  constructor(private http: HttpClient) {}

  sendForm(questions: { [key: string]: string }): Observable<FlaskResponse> {
    return this.http.post<FlaskResponse>(this.BASE_URL, questions);
  }

  descargarCSV(filtros: Filtros) {
    this.http
      .post(`${this.BASE_URL}/csv`, filtros, {
        responseType: 'blob',
      })
      .subscribe(
        (response: Blob) => {
          const blob = new Blob([response], { type: 'text/csv' });
          saveAs(blob, 'respuestas.csv');
        },
        (error) => {
          console.error('Error al descargar el CSV:', error);
        }
      );
  }
}
