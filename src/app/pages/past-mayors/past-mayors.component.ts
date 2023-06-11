import { Component } from '@angular/core';
import { PastMayors } from 'src/app/models/past-mayor';
import { PastMayorsService } from 'src/app/services/mayors/past-mayors.service';

@Component({
  selector: 'app-past-mayors',
  templateUrl: './past-mayors.component.html',
  styleUrls: ['./past-mayors.component.scss'],
})
export class PastMayorsComponent {
  cardData?: PastMayors[];

  constructor(private _pastMayorService: PastMayorsService) {}

  async pruebaCarga() {
    const result = await this._pastMayorService.addPastMayor(this.dataOnePastMayor);
    console.log(result)
  }

  dataOnePastMayor: PastMayors = {
    ano: 2019,
    censoe_hombres: 1234,
    censoe_mujeres: 1234,
    censoe_total: 2345,
    circunscripcion: 'Municipal',
    coddpto: 2345,
    codigo_lista: 2345,
    codigo_partido: 1234,
    codmpio: 2345,
    curules: 2345,
    departamento: 'ANTIOQUIA',
    fecha_eleccion: 'Octubre 27',
    id_electoral: 2345,
    municipio: 'SAN JUAN DE URABA',
    nombres: 'LUIS FERNANDO',
    primer_apellido: 'RUIZ',
    segundo_apellido: 'DIAZ',
    tipo_eleccion: 'Alcaldía Municipal',
    votos: 2345,
  };
}
