export interface ModelosNS {
  id: number;
  nombre: string;
  created_at: string;
  tipo: string;
  parametros: Parametros;
  principal: boolean;
}

export interface EntrenamientoModelo {
  tipo: string;
  nombre: string;
  parametros: {};
  dataset: {};
}

export interface Parametros {
  n_clusters?: number;
  n_components?: number;
  random_state: number;
  n_init: number;
  max_iter: number;
}
