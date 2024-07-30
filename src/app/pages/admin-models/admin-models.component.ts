import { Component, OnInit } from '@angular/core';
import { ModelosNS } from '../../shared/models/modelosia.models';
import { ModelsService } from '../../shared/services/models.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-models',
  templateUrl: './admin-models.component.html',
  styleUrl: './admin-models.component.scss',
})
export class AdminModelsComponent implements OnInit {
  modelos: ModelosNS[] = [];
  tipoModelos: string[] = ['kmeans', 'gauss'];
  selectedAlgorithm: string = 'kmeans';
  algorithmForm: FormGroup;

  constructor(private modelosService: ModelsService, private fb: FormBuilder) {
    this.algorithmForm = this.fb.group({
      KMeans: this.fb.group({
        n_clusters: [4, Validators.required],
        random_state: [42, Validators.required],
        n_init: [10, Validators.required],
        max_iter: [3000, Validators.required],
      }),
      Gauss: this.fb.group({
        n_components: [4, Validators.required],
        random_state: [42, Validators.required],
        n_init: [1, Validators.required],
        max_iter: [3000, Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.obtenerModelos();
  }

  deleteModel(id: number, nombre: string) {
    Swal.fire({
      title: '¡Cuidado!',
      text: `¿Estas seguro de eliminar ${nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.modelosService.deleteModel(id).subscribe((resp: any) => {
          if (resp.mensaje) {
            Swal.fire({ title: resp.mensaje, icon: 'success' });
            this.obtenerModelos();
          } else {
            Swal.fire({ title: resp.error, icon: 'error' });
          }
        });
      }
    });
  }

  obtenerModelos() {
    this.modelosService.getModels().subscribe({
      next: (modelos) => {
        this.modelos = modelos;
      },
      error: (error) => console.error('Error al obtener los modelos:', error),
    });
  }

  setDefault(id: number) {
    this.modelosService.setDefaultModel(id).subscribe((resp: any) => {
      if (resp.mensaje) {
        Swal.fire({ title: resp.mensaje, icon: 'success' });
        this.obtenerModelos();
      } else {
        Swal.fire({ title: resp.error, icon: 'error' });
      }
    });
  }

  onAlgorithmChange(event: any) {
    this.selectedAlgorithm = event.value;
  }
}
