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
  nombre = "";
  fichapdf = "";
  fichapdfname = "";
  pathpdf = "../../../../assets/pdf/";
  ngOnInit() {
    this.secondModel = this.selectedData;
    
    if(this.selectedData.presentaciones){
        

        /*********/
        if(this.convert_num){
          this.convert_num = false;
          var numero = 0;
          this.selectedData.presentaciones.forEach(element => {
            this.selectedData.presentaciones[numero].peso = add_string(element.peso);
            numero +=1;
          });
        }
        /*********/
        this.selected = this.selectedData.presentaciones[0];
        this.nombre = this.selected.nombre;

        this.selected.altura = formatearNumero2(this.selected.altura);
        this.unidades = formatearNumero(this.selected.unidades);
        // alert(this.selected.peso);
        console.log(this.selected.peso);
        this.fichapdfname = linkpdf(this.nombre , this.selected.peso , this.selected.altura);
        this.fichapdf = this.pathpdf + this.fichapdfname;
    }else{
      this.selected = null
    }

  }
  onChange($event){

    let data = $event

    this.selected = data

    this.unidades = formatearNumero(this.selected.unidades);
    this.selected.altura = formatearNumero2(this.selected.altura);
    this.nombre = this.selected.nombre;

    this.fichapdfname = linkpdf(this.nombre , this.selected.peso , this.selected.altura);
    this.fichapdf = this.pathpdf + this.fichapdfname;
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
function formatearNumero3(val){
  var numeron = formatearNumero2(val);
  alert(numeron);
  numeron = formatearNumero(numeron);
  console.log("new:" + numeron);
  return numeron;

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

function formatearNumero4(nStr) {
  nStr += '';
  var x = nStr.split(',');
  var x1 = x[0];
  x[1] = formatearNumero2(x[1]) + "";
  console.log(x[1]);
  if(x[1].length === 4){
    x[1] = "0" + x[1];
  }
  if(x[1].length === 3){
    x[1] = "00" + x[1];
  }
  console.log("data 22: " + x[1]);
  var x2 = x.length > 1 ? ',' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  console.log("step 1:" + x1);
  console.log("step 2:" + x2);
  console.log("step 3:" + x1 + x2);
  return x1 + x2;
}
function linkpdf(name , peso , altura){
  if(name === "Preforma 33mm"){
    if(peso === "21.50"){
      return "21_5_GRAMOS_33_MM.pdf"
    }
  }
  if(name === "Preforma 1881"){
    if(peso === "18.50"){
      if(altura === "92.87"){
        return "92_87_altura_18_5_GRAMOS_CORTA_1881.pdf"
      }
      if(altura === "92.35"){
        return "92_35_altura_18_5_G-N_CORTA_1881.pdf"
      }
    }
  }
  return "ingrup.pdf"
}