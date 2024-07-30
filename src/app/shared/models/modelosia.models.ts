export interface ModelosNS {
  id: number;
  nombre: string;
  created_at: string;
  tipo: string;
  parametros: string;
  principal: boolean;
}

export interface EntrenamientoModelo {
  tipo: string;
  nombre: string;
  parametros: {};
  dataset: {};
}
