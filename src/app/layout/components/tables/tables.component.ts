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
    var number = 0;

    for (let entry of this.selectedData.presentaciones) {
      this.selectedData.presentaciones[number].peso = this.selectedData.presentaciones[number].peso.toFixed(2);
      number = number + 1;
    }
    if(this.selectedData.presentaciones){
      this.selected = this.selectedData.presentaciones[0];
      if(this.selected.cuello=='' || this.selected.cuello<=0){
        this.selected.peso = "N/A";
      }else{
        this.selected.cuello = this.selected.cuello.toLocaleString();
        this.selected.cuello = (formatearNumero(this.selected.cuello)).toLocaleString();
      }
      if(this.selected.unidades>0){
        this.selected.unidades = this.selected.unidades.toLocaleString();
        this.selected.unidades = (formatearNumero(this.selected.unidades)).toLocaleString();
      }
      
      
      this.selected.altura = this.selected.altura.toFixed(2);
    }else{
      this.selected = null
    }

  }
  onChange($event){
    //   this.complete=$event
    let data = $event
    this.selected = data
    //this.selected.peso = this.selected.peso.toFixed(2);
    //console.log(this.selected);
    //   console.log(data);
    //   console.log(this.selectedData.presentaciones[0]);

  }
  onClear(){
    this.selected = this.selectedData.presentaciones[0]
  }
  removeDuplicates(originalArray, prop) {



  }
  
}
function formatearNumero(nStr) {
  nStr += '';
  var x = nStr.split(',');
  var x1 = x[0];
  var x2 = x.length > 1 ? ',' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    console.log(x1);
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
    console.log(x1);
  }
  return x1 + x2;
}
