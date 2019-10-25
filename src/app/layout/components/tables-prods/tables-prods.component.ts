import { Component, OnInit, Input } from '@angular/core';
import { FormComponent } from "./../../form/form.component";

@Component({
  selector: 'app-tables-prods',
  templateUrl: './tables-prods.component.html',
  styleUrls: ['./tables-prods.component.scss']
})
export class TablesProdsComponent implements OnInit {
    session:boolean = localStorage.getItem('currentUser')?true:false;

    @Input() selectedData
  constructor(
      private TablesComponent:FormComponent
  ) { }
  selected:any = {
      id: 0,
      nombre: "",
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
