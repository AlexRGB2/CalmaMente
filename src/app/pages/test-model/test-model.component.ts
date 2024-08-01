import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModelsService } from '../../shared/services/models.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrl: './test-model.component.scss',
})
export class TestModelComponent {
  @Output() isVisibleTestModel: EventEmitter<boolean> = new EventEmitter();
  preguntas: string[] = [];
  respuestas: any;

  constructor(private fb: FormBuilder, private modelosService: ModelsService) {
    console.log(localStorage.getItem('columnas'));
    this.preguntas = localStorage.getItem('columnas')?.split(',')!;
  }

  enviar() {
    const preguntas = document.querySelectorAll('.preguntas');

    console.log(preguntas);
  }
}
