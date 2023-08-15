import { Component, OnInit } from '@angular/core';
import { PastMayor, FormData } from 'src/app/models/past-mayor';
import { PastMayorsService } from 'src/app/services/mayors/past-mayors.service';
import { csv } from 'd3';

@Component({
  selector: 'app-past-mayors',
  templateUrl: './past-mayors.component.html',
  styleUrls: ['./past-mayors.component.scss'],
})
export class PastMayorsComponent implements OnInit {
  cardData?: PastMayor[];
  collection: string = '2019';
  dataUp?: PastMayor[];
  anos:string[] = ['1988','1990','1992', '1994', '1997', '2000','2003','2007', '2011', '2015', '2019']
  municipios = ["necocli", "san juan de uraba", "arboletes", "carepa", "turbo", "apartado", "chigorodo"];
  dataFromForm?: PastMayor[];
  formSubmitted?: Boolean;

  constructor(private _pastMayorService: PastMayorsService) {}

  ngOnInit(): void {
    this.convertirDatos();
  }

  // async pruebaCarga() {
  //   console.log('enviando');
  //   if (this.dataUp === undefined) {
  //     console.log("Error al traer los archivos '.csv'");
  //     return;
  //   }
  //   this.dataUp.forEach(async (mayor) => {
  //     try {
  //       await this._pastMayorService.addPastMayor(mayor, this.collection);
  //     } catch (error) {
  //       console.log('Error al crear el documento');
  //     }
  //   });
  // }

  async convertirDatos() {
    try {
      const data: any[] = await csv(
        `../../../assets/data/past-mayors-data/${this.collection}_alcaldia.dta.csv`
      );
      this.dataUp = data.filter((mayor) => {
        return this.municipios.includes(mayor.municipio.toLowerCase());
      });
      console.log(this.dataUp);
    } catch (error) {
      console.log(error);
    }
  }


  receiveFormData(eventData: FormData) { // Utiliza la interfaz FormData
    this.dataFromForm = eventData.data;
    this.formSubmitted = eventData.formSubmitted;
  }
}
