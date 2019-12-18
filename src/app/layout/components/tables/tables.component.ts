import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { TablesComponent } from "./../../tables/tables.component";
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
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
  selected2:any = {
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
  unidades: any ;
  peso: any = {
    data: []
  };
  convert_num = true;
  secondModel: any;
  
  // ngOnInit() {
  //   var number = 0;

  //   for (let entry of this.selectedData.presentaciones) {
  //     try {
  //       this.selectedData.presentaciones[number].peso = (formatearNumero2(this.selectedData.presentaciones[number].peso));
  //       throw new Error('Something bad happened');
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     number = number + 1;
  //   }
  //   if(this.selectedData.presentaciones){
  //     this.selected = this.selectedData.presentaciones[0];
  //     if(this.selected.cuello=='' || this.selected.cuello<=0){
  //       this.selected.peso = "N/A";
  //     }else{
  //       this.selected.cuello = this.selected.cuello.toLocaleString();
  //       this.selected.cuello = (formatearNumero(this.selected.cuello)).toLocaleString();
  //     }
  //     if(this.selected.unidades>0){
  //       this.selected.unidades = this.selected.unidades.toLocaleString();
  //       this.selected.unidades = (formatearNumero(this.selected.unidades)).toLocaleString();
  //     }
  //     try {
  //       this.selected.altura = this.selected.altura.toFixed(2);
  //       throw new Error('Something bad happened');
  //     } catch (e) {
  //       console.log(e)
  //     }
      
  //   }else{
  //     this.selected = null
  //   }

  // }
  ngOnInit() {
    this.secondModel = this.selectedData;
    
    if(this.selectedData.presentaciones){
        

        /*********/
        if(this.convert_num){
          this.convert_num = false;
          console.log(this.peso.data.length);
          var numero = 0;
          this.selectedData.presentaciones.forEach(element => {
            this.selectedData.presentaciones[numero].peso = (formatearNumero2(element.peso));
            console.log(this.selectedData.presentaciones[numero].peso);
            console.log("vueltas: " + numero);
            numero +=1;
          });
        }
        /*********/
        this.selected = this.selectedData.presentaciones[0];
        console.log(this.selected);
        console.log(this.selectedData);
        this.selected.peso = this.selectedData.presentaciones[0].peso;
        this.unidades = formatearNumero(this.selected.unidades);
    }else{
      this.selected = null
    }
    // if(this.secondModel.presentaciones){
    //   this.selected2 = this.secondModel.presentaciones[0];
    //   var num = 0;
    //   this.secondModel.presentaciones.forEach(element => {
    //     try {
    //       this.secondModel.presentaciones[num].peso = element.peso.toFixed(2);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     num +=1;
    //   });
    //   console.log(this.secondModel);
    //   console.log(this.selectedData);
    // }else{
    //   this.selected2 = null
    // }
  }
  onChange($event){

    let data = $event

    this.selected = data

    this.unidades = formatearNumero(this.selected.unidades);
    /*********/
    console.log($event);
    /*********/
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
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
function formatearNumero2(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x2 = "";
  if(x[1]){
    x[1] = x[1] + "0";
    x2 = "." + x[1];
  }
  var x1 = x[0];
  var converted: any;
  try {
    converted = (parseFloat(x1 + x2)).toFixed(2);
    throw new Error('Something bad happened');
  } catch (e) {
    console.log(e)
  }
  console.log(converted);
  return converted;
}
