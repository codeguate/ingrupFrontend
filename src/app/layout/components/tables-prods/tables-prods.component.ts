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

  ngOnInit() {
  }

}
