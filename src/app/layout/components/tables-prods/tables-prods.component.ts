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
  unidades: any ;
  nombre: "";
  ngOnInit() {
    if(this.selectedData.presentaciones){
      this.selected = this.selectedData.presentaciones[0];
      this.nombre = this.selected.nombre;
      var numero = 0;
      this.selectedData.presentaciones.forEach(element => {
        this.selectedData.presentaciones[numero].peso = add_string(element.peso);
        numero +=1;
      });
      this.selected.unidades = formatearNumero(this.selected.unidades);
      this.selected.altura = formatearNumero2(this.selected.altura);
      console.log(this.selected);
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
    this.selected.unidades = formatearNumero(this.selected.unidades);
    this.selected.altura = formatearNumero2(this.selected.altura);
    this.nombre = this.selected.nombre;

  }
  onClear(){
    this.selected = this.selectedData.presentaciones[0]
  }
  removeDuplicates(originalArray, prop) {



    }
}

function add_string(string_val){
  string_val = string_val + "";
  var convert = true;
  for (let index = 0; index < string_val.length; index++) {
    const element = string_val[index];
    if(element === ","){
      convert = false;
    }
  }
  if(convert){
    string_val = string_val + "";
  var string_data = string_val.split(".",2);
  // console.log("array string: " + string_data[1]);
  var data_decimal = string_data[1];
  string_data = string_data[0];
  var array_nums = [];
  var string_numero = "";
  for (let index = 0; index < string_data.length; index++) {
    const element = string_data[index];
    // console.log(element);
    if(string_data.length > 3){
      if(string_data.length - 3 === index){
        array_nums.push(",");
        string_numero += ",";
      }
    }
    array_nums.push(element);
    string_numero += element;
  }
  // console.log("decimales: " + data_decimal);
  if(!data_decimal){
    // console.log(".00");
    string_numero =  string_numero + ".00";
  }else{
    // console.log("data decimal true");
    if(data_decimal.length === 1){
      // console.log("length: " + data_decimal.length);
      string_numero = string_numero + "." +data_decimal + "0";
    }else if( data_decimal.length === 2){
      string_numero = string_numero + "." + data_decimal;
    }

  }
    return string_numero.toString();
  }else{
    return string_val;
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
  console.log("-----------------");
  console.log(converted);
  console.log("-----------------");
  return converted;
}