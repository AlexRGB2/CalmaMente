import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsService } from '../../shared/services/models.service';
import { EntrenamientoModelo } from '../../shared/models/modelosia.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html',
  styleUrl: './new-model.component.scss',
})
export class NewModelComponent {
  tipoModelos: string[] = ['kmeans', 'gauss'];
  selectedAlgorithm: string = 'kmeans';
  kmeansForm: FormGroup;
  gaussForm: FormGroup;
  nombreAlgoritmo: string = '';
  dataset: {} | undefined;

  constructor(private fb: FormBuilder, private modelsService: ModelsService) {
    this.kmeansForm = this.fb.group({
      n_clusters: [4, Validators.required],
      random_state: [42, Validators.required],
      n_init: [10, Validators.required],
      max_iter: [3000, Validators.required],
    });

    this.gaussForm = this.fb.group({
      n_components: [4, Validators.required],
      random_state: [42, Validators.required],
      n_init: [1, Validators.required],
      max_iter: [3000, Validators.required],
    });
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64String = btoa(
          new Uint8Array(e.target.result).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );

        this.dataset = {
          fileName: inputNode.files[0].name,
          fileType: inputNode.files[0].type,
          fileContent: base64String,
        };
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  onAlgorithmChange(event: any) {
    this.selectedAlgorithm = event.value;
  }

  newModel() {
    let json: EntrenamientoModelo;

    if (this.selectedAlgorithm == 'kmeans') {
      json = {
        tipo: this.selectedAlgorithm,
        nombre: this.nombreAlgoritmo,
        parametros: this.kmeansForm.value,
        dataset: this.dataset || {},
      };
    } else {
      json = {
        tipo: this.selectedAlgorithm,
        nombre: this.nombreAlgoritmo,
        parametros: this.gaussForm.value,
        dataset: this.dataset || {},
      };
    }

    this.modelsService.newModel(json).subscribe(
      (resp: any) => {
        if (resp.mensaje) {
          Swal.fire({ title: resp.mensaje, icon: 'success' });
          this.dataset = undefined;
          this.nombreAlgoritmo = '';
        } else {
          Swal.fire({ title: resp.error, icon: 'error' });
        }
      },
      (error) => {
        Swal.fire({ title: 'Error', text: error.error.error, icon: 'error' });
      }
    );
  }
}
