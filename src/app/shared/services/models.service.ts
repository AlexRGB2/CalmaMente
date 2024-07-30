import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelosNS } from '../models/modelosia.models';
import { environment } from '../../../environments/environment.development';
import { ModelosResponse } from '../models/response.models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  private BASE_URL: string = `${environment.API_URL}/modelos`;

  constructor(private http: HttpClient) {}

  getModels(): Observable<ModelosNS[]> {
    return this.http
      .get<ModelosResponse>(this.BASE_URL)
      .pipe(map((resp) => resp.rows));
  }

  deleteModel(id: number) {
    const json = { id: id };

    return this.http.post(`${this.BASE_URL}/eliminar`, json);
  }

  setDefaultModel(id: number) {
    const json = { id: id };

    return this.http.put(this.BASE_URL, json);
  }

  entrenarModelo() {}
}
