import { Component, OnInit } from '@angular/core';
import { PastMayors } from 'src/app/models/past-mayor';
import { PastMayorsService } from 'src/app/services/mayors/past-mayors.service';
import { csv } from 'd3';

@Component({
  selector: 'app-past-mayors',
  templateUrl: './past-mayors.component.html',
  styleUrls: ['./past-mayors.component.scss'],
})
export class PastMayorsComponent implements OnInit {
  cardData?: PastMayors[];
  collection: string = '2007';
  dataUp?: PastMayors[];

  constructor(private _pastMayorService: PastMayorsService) {}

  ngOnInit(): void {
    this.convertirDatos();
  }

  async pruebaCarga() {
    console.log("enviando");
    if (this.dataUp === undefined) {
      console.log("Error al traer los archivos '.csv'");
      return;
    }
    this.dataUp.forEach(async (mayor) => {
      try {
        await this._pastMayorService.addPastMayor(mayor, this.collection);
      } catch (error) {
        console.log('Error al crear el documento');
      }
    });
  }

  async convertirDatos() {
    try {
      const data: any[] = await csv(
        `../../../assets/data/past-mayors-data/${this.collection}_alcaldia.dta.csv`
      );
      this.dataUp = data;
      console.log(this.dataUp);
    } catch (error) {
      console.log(error);
    }
  }
}
