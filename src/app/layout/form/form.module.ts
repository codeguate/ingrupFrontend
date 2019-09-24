import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtftModule } from 'atft';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ProductosService } from "./../../shared/services/productos.service";

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { MenuComponent } from './../components/menu/menu.component';

@NgModule({
    imports: [CommonModule, FormRoutingModule, NgbModule, PageHeaderModule,AtftModule,CarouselModule,FormsModule],
    declarations: [FormComponent,MenuComponent],
    providers: [ProductosService]
})
export class FormModule {}
