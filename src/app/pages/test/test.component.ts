import { Component } from '@angular/core';
import { preguntas } from './preguntas';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  preguntas: string[] = preguntas;
  indexPregunta: number = 0;
  isTestStarted: boolean = true;
  opciones: number[] = [0, 1, 2, 3];
  opcionesText: string[] = ['Nunca', 'A veces', 'A menudo', 'Siempre'];
  opcion: number = 0;
  respuestas: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  nextQuestion() {
    if (this.indexPregunta < preguntas.length - 1) {
      this.indexPregunta++;
      this.respuestas.push(this.opcion);
      console.log(this.respuestas);
    }
  }

  saveAnswers() {}
}
