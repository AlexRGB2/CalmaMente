import { ModelosNS } from './modelosia.models';

export interface FlaskResponse {
  mensaje: string;
  prediccion: string;
}

export interface CSVResponse {
  mensaje: string;
  rows: string;
}

export interface ModelosResponse {
  mensaje: string;
  rows: ModelosNS[];
}

export interface ChartsResponse {
  datos: DatosResponse[];
  mensaje: string;
}

interface DatosResponse {
  created_at: string;
  descripcion: null;
  id: number;
  id_modelo: number;
  nombre: string;
  tipo: string;
  valor: [{ name: string; data: [] }];
}
