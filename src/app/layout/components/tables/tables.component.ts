import { Component, OnInit, Input } from '@angular/core';
import { TablesComponent } from "./../../tables/tables.component";
@Component({
  selector: 'tables-data',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesDataComponent implements OnInit {
    session:boolean = localStorage.getItem('currentUser')?true:false;

    @Input() selectedData
  constructor(
      private TablesComponent:TablesComponent
  ) { }
  selected:any = {
      descripcion: [],
      peso: [],
      largo: [],
      cuello: [],
      altura: [],
      unidades: [],
      separador: []
  }
  complete:any = {
      descripcion: [],
      peso: [],
      largo: [],
      cuello: [],
      altura: [],
      unidades: [],
      separador: []
  }

  ngOnInit() {
    if(this.selectedData.presentaciones){
        this.selected.descripcion = [
          this.selectedData.presentaciones[0]
        ]
        let sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.nombre)==(valorActual.nombre)) === indiceActual
        });
        this.complete.descripcion = sinRepetidos

        this.selected.peso = [
          this.selectedData.presentaciones[0]
        ]
        sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.peso)==(valorActual.peso)) === indiceActual
        });
        this.complete.peso = sinRepetidos
        this.selected.largo = [
          this.selectedData.presentaciones[0]
        ]
        sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.largo)==(valorActual.largo)) === indiceActual
        });
        this.complete.largo = sinRepetidos
        this.selected.cuello = [
          this.selectedData.presentaciones[0]
        ]
        sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.cuello)==(valorActual.cuello)) === indiceActual
        });
        this.complete.cuello = sinRepetidos
        this.selected.altura = [
          this.selectedData.presentaciones[0]
        ]
        sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.altura)==(valorActual.altura)) === indiceActual
        });
        this.complete.altura = sinRepetidos
        this.selected.unidades = [
          this.selectedData.presentaciones[0]
        ]
        sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.unidades)==(valorActual.unidades)) === indiceActual
        });
        this.complete.unidades = sinRepetidos
        this.selected.separador = [
          this.selectedData.presentaciones[0]
        ]
        sinRepetidos = this.selectedData.presentaciones.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => (valorDelArreglo.separador)==(valorActual.separador)) === indiceActual
        });
        this.complete.separador = sinRepetidos
      }
  }
  onChange($event){
    //   this.complete=$event
    let data = $event
    this.selected =data
      console.log(data);

  }
  removeDuplicates(originalArray, prop) {



    }
}
