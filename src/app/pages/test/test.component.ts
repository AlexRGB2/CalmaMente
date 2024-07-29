import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Question } from '../../shared/models/question.model';
import { FormularioService } from '../../shared/services/formulario.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  selectedOption: string | null = null;
  answers: { [key: string]: string } = {};
  paso: number = 1;
  opciones: string[] = [''];
  nivelAnsiedad = '';

  constructor(private formularioService: FormularioService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questions = [
      {
        text: 'Sensacion de agobio de angustia',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Sensacion de inquietud nervios intranquilidad',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Corazon acelerado o palpitaciones',
        options: ['0', '1', '2', '3'],
      },
      { text: 'Sensacion de fatiga', options: ['0', '1', '2', '3'] },
      {
        text: 'Problemas para descansar y para dormir',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Tension muscular o dolores en algunas partes del cuerpo',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Presion en el pecho sensacion de ahogo o de que cuesta respirar',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Dolor de tripa nauseas o vomitos',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Problemas de concentracion incluso en tareas sencillas',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Incapacidad de pensar claramente o bloqueo mental',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Pensamientos anticipatorios negativos o catastroficos',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Faltas de memoria te cuesta recordar cosas',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Inseguridad a la hora de tomar decisiones incluso simples',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Pensamientos rumiativos le das muchas vueltas a las cosas',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Fumar o beber mas de lo habitual',
        options: ['0', '1', '2', '3'],
      },
      {
        text: 'Evitar determinadas situaciones',
        options: ['0', '1', '2', '3'],
      },
      { text: 'Cambios en el apetito', options: ['0', '1', '2', '3'] },
      { text: 'Cambios en la conducta sexual', options: ['0', '1', '2', '3'] },
      { text: 'Llorar mas de lo habitual', options: ['0', '1', '2', '3'] },
      {
        text: 'Cambios de humor irritabilidad',
        options: ['0', '1', '2', '3'],
      },
    ];
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion(): void {
    if (!this.selectedOption) {
      this.openDialog('Debe seleccionar una opción antes de continuar.');
      return;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.saveAnswer();
      this.currentQuestionIndex++;
      this.selectedOption = this.answers[this.currentQuestion.text] || null;
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.saveAnswer();
      this.currentQuestionIndex--;
      this.selectedOption = this.answers[this.currentQuestion.text] || null;
    }
  }

  saveAnswer(): void {
    if (this.currentQuestion.text) {
      this.answers[this.currentQuestion.text] = this.selectedOption!;
    }
  }

  submit(): void {
    if (!this.selectedOption) {
      this.openDialog('Debe seleccionar una opción antes de continuar.');
      return;
    }

    this.saveAnswer();

    const totalScore = Object.values(this.answers).reduce(
      (sum, value) => sum + Number(value),
      0
    );

    this.answers['Puntaje Total'] = totalScore.toString();

    this.formularioService.sendForm(this.answers).subscribe((resp) => {
      const prediccion = Number.parseInt(resp.prediccion);

      switch (prediccion) {
        case 0:
          this.nivelAnsiedad = 'Ansiedad Baja';
          this.paso = 3;
          break;
        case 1:
          this.nivelAnsiedad = 'Ansiedad Leve';
          this.paso = 4;
          break;
        case 2:
          this.nivelAnsiedad = 'Ansiedad Moderada';
          this.paso = 5;
          break;
        case 3:
          this.nivelAnsiedad = 'Ansiedad Alta';
          this.paso = 6;
          break;
        default:
          break;
      }
    });
  }

  openDialog(message: string): void {
    Swal.fire({
      title: 'Atención',
      text: message,
      icon: 'warning',
      confirmButtonText: 'Ok',
    });
  }
}
