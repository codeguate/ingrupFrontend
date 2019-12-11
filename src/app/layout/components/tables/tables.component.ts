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
      id: 0,
      nombre: [],
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
        this.selected = this.selectedData.presentaciones[0]
      }else{
        this.selected = null
      }
  }
  onChange($event){
    //   this.complete=$event
    let data = $event
    this.selected = data
    //   console.log(data);
    //   console.log(this.selectedData.presentaciones[0]);

  }
  onClear(){
    this.selected = this.selectedData.presentaciones[0]
  }
  removeDuplicates(originalArray, prop) {



    }
}
