export interface PastMayor {
  ano: number;
  censoe_hombres: number;
  censoe_mujeres: number;
  censoe_total: number;
  circunscripcion: string;
  coddpto: number;
  codigo_lista: number;
  codigo_partido: number;
  codmpio: number;
  curules: number;
  departamento: string;
  fecha_eleccion: string;
  id_electoral: number;
  municipio: string;
  nombres: string;
  primer_apellido: string;
  segundo_apellido: string;
  tipo_eleccion: string;
  votos: number;
}

export interface FormData {
  data: PastMayor[];
  formSubmitted: boolean;
}
