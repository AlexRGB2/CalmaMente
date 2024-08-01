import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModelsService } from '../../shared/services/models.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../../shared/services/formulario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrl: './test-model.component.scss',
})
export class TestModelComponent {
  @Output() isVisibleTestModel: EventEmitter<boolean> = new EventEmitter();
  preguntas: string[] = [];
  respuestas: any;
  formPreguntas: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formularioService: FormularioService
  ) {
    this.preguntas = localStorage.getItem('columnas')?.split(',')!;

    const formControls = this.createFormControls();
    this.formPreguntas = this.fb.group(formControls);
  }

  enviar() {
    if (this.formPreguntas.valid) {
      this.formularioService.sendForm(this.formPreguntas.value).subscribe(
        (resp) => {
          console.log(resp);
          if (resp.mensaje) {
            Swal.fire({
              title: resp.mensaje,
              text: `Clasificación en el grupo: ${resp.prediccion}`,
              icon: 'success',
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Ha ocurrido un error en el servidor',
              icon: 'error',
            });
          }
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: error.error,
            icon: 'error',
          });
        }
      );
    }
  }

  createFormControls(): { [key: string]: any } {
    const controls: any = {};
    this.preguntas.forEach((question) => {
      controls[question] = ['', Validators.required];
    });
    return controls;
  }
}
