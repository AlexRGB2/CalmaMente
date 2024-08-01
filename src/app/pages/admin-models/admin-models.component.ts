import { Component, Input, OnInit } from '@angular/core';
import { ModelosNS, Parametros } from '../../shared/models/modelosia.models';
import { ModelsService } from '../../shared/services/models.service';
import Swal from 'sweetalert2';
import saveAs from 'file-saver';
import { Router } from '@angular/router';
import { ColumnsResponse } from '../../shared/models/response.models';

@Component({
  selector: 'app-admin-models',
  templateUrl: './admin-models.component.html',
  styleUrl: './admin-models.component.scss',
})
export class AdminModelsComponent implements OnInit {
  modelos: ModelosNS[] = [];
  displayedColumns: string[] = [
    'tipo',
    'nombre',
    'fecha de creación',
    'parametros',
    'acciones',
  ];
  isVisibleChart: boolean = false;
  idModel: number = 0;

  constructor(private modelosService: ModelsService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerModelos();
  }

  deleteModel(id: number, nombre: string, isDefault: boolean) {
    if (!isDefault) {
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
          this.modelosService.deleteModel(id).subscribe(
            (resp: any) => {
              if (resp.mensaje) {
                Swal.fire({ title: resp.mensaje, icon: 'success' });
                this.obtenerModelos();
              } else {
                Swal.fire({ title: resp.error, icon: 'error' });
              }
            },
            (error) => {
              Swal.fire({
                title: 'Error',
                text: error.error.error,
                icon: 'error',
              });
            }
          );
        }
      });
    } else {
      Swal.fire({
        title: 'Advertencia',
        text: 'No puedes eliminar el modelo Default.',
        icon: 'info',
      });
    }
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
    this.modelosService.setDefaultModel(id).subscribe(
      (resp: any) => {
        if (resp.mensaje) {
          Swal.fire({ title: resp.mensaje, icon: 'success' });
          this.obtenerModelos();
        } else {
          Swal.fire({ title: resp.error, icon: 'error' });
        }
      },
      (error) => {
        Swal.fire({ title: 'Error', text: error.error.error, icon: 'error' });
      }
    );
  }

  getStats(id: number) {
    this.modelosService.getStats(id).subscribe((resp) => {
      const item = resp.datos.find((d) => d.tipo === '2.1');
      const metodoCodo = resp.datos.find((d) => d.tipo === '2.2');
      const totalClusters = resp.datos.find((d) => d.tipo === '2.3');

      if (item && totalClusters && metodoCodo) {
        const json = {
          nombre: item.nombre,
          valor: item.valor,
        };
        localStorage.setItem(item.tipo, JSON.stringify(json));

        // Tipo 2.2
        localStorage.setItem(
          metodoCodo.tipo,
          JSON.stringify({
            nombre: metodoCodo.nombre,
            valor: metodoCodo.valor,
          })
        );

        // Tipo 2.3
        localStorage.setItem(
          totalClusters.tipo,
          JSON.stringify({
            nombre: totalClusters.nombre,
            valor: totalClusters.valor,
          })
        );
        this.isVisibleChart = true;
      } else {
        console.log("No se encontró un objeto con el tipo '2.1'");
      }
    });
  }

  onVisibleCharts(isVisible: boolean): void {
    this.isVisibleChart = isVisible;
  }

  downModel(id: number, nombre: string) {
    Swal.fire({
      title: '¡Cuidado!',
      text: `¿Estas seguro de descargar el modelo ${nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, descargar!',
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.modelosService.downModel(id).subscribe(
          (response: Blob) => {
            const blob = new Blob([response], {
              type: 'application/octet-stream',
            });
            saveAs(blob, nombre + '.pkl');
          },
          (error) => {
            console.error('Error al descargar el modelo:', error);
          }
        );
      }
    });
  }

  getColumnas(id: number) {
    this.modelosService.getColumnas(id).subscribe(
      (res: ColumnsResponse) => {
        localStorage.setItem('columnas', res.columnas.toString());
        this.router.navigate(['test-model']);
      },
      (error) => {
        console.error('Error al descargar el modelo:', error);
      }
    );
  }

  getFormattedConfig(parametro: Parametros): string {
    const param: Parametros = JSON.parse(parametro.toString());
    const mainParam =
      param.n_components !== undefined
        ? `N Componentes: ${param.n_components}`
        : `N Clusters: ${param.n_clusters}`;

    return `${mainParam}, Random State: ${param.random_state}, <br>N Init: ${param.n_init}, Max Iter: ${param.max_iter}`;
  }
}
