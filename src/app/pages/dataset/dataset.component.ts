import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormularioService } from '../../shared/services/formulario.service';
import { Filtros } from '../../shared/models/csv.models';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.scss',
})
export class DatasetComponent {
  columnas: string[] = [];

  columnasForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {
    this.columnas = [
      'Nivel de Ansiedad',
      'Sensacion de agobio de angustia',
      'Sensacion de inquietud nervios intranquilidad',
      'Corazon acelerado o palpitaciones',
      'Sensacion de fatiga',
      'Problemas para descansar y para dormir',
      'Tension muscular o dolores en algunas partes del cuerpo',
      'Presion en el pecho sensacion de ahogo o de que cuesta respirar',
      'Dolor de tripa nauseas o vomitos',
      'Problemas de concentracion incluso en tareas sencillas',
      'Incapacidad de pensar claramente o bloqueo mental',
      'Pensamientos anticipatorios negativos o catastroficos',
      'Faltas de memoria te cuesta recordar cosas',
      'Inseguridad a la hora de tomar decisiones incluso simples',
      'Pensamientos rumiativos le das muchas vueltas a las cosas',
      'Fumar o beber mas de lo habitual',
      'Evitar determinadas situaciones',
      'Cambios en el apetito',
      'Cambios en la conducta sexual',
      'Llorar mas de lo habitual',
      'Cambios de humor irritabilidad',
      'Puntaje Total',
    ];

    const controlsConfig = this.columnas.reduce((acc: any, _, index) => {
      acc[index + 1] = false;
      return acc;
    }, {});

    this.columnasForm = this.formBuilder.group(controlsConfig);
  }

  toggleSelectAll(event: any) {
    const checked = event.checked;
    const controls = this.columnasForm.controls;

    // Establece el valor de todos los checkboxes según el estado del checkbox "Seleccionar Todo"
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].setValue(checked);
      }
    }
  }

  getSelectedColumns(): string[] {
    const selectedColumns: string[] = [];
    const controls = this.columnasForm.controls;
    for (let i = 1; i <= Object.keys(controls).length; i++) {
      if (controls[i].value) {
        selectedColumns.push(this.columnas[i - 1]);
      }
    }
    return selectedColumns;
  }

  onSubmit() {
    const selectedColumns = this.getSelectedColumns().join(', ');

    const filtros: Filtros = { columnas: selectedColumns };

    console.log(filtros);

    this.formularioService.descargarCSV(filtros);
  }
}
