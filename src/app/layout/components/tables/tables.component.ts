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
        this.complete.descripcion = this.removeDuplicates(this.selectedData.presentaciones,"descripcion")

        this.selected.peso = [
          this.selectedData.presentaciones[0]
        ]
        this.selected.largo = [
          this.selectedData.presentaciones[0]
        ]
        this.selected.cuello = [
          this.selectedData.presentaciones[0]
        ]
        this.selected.altura = [
          this.selectedData.presentaciones[0]
        ]
        this.selected.unidades = [
          this.selectedData.presentaciones[0]
        ]
        this.selected.separador = [
          this.selectedData.presentaciones[0]
        ]
      }
  }

  removeDuplicates(originalArray, prop) {



    }
}
