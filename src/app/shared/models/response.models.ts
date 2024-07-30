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
