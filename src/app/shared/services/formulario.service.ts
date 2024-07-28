import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  BASE_URL = environment.API_URL + '';

  constructor(private http: HttpClient) {}

  sendForm(questions: { [key: string]: string }): void {
    this.http.post(this.BASE_URL, questions);
  }
}
