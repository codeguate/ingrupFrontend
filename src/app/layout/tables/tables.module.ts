import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtftModule } from 'atft';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ProductosService } from "./../../shared/services/productos.service";

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { HeaderComponent } from './../components/header/header.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule,FormsModule, NgbModule,PageHeaderModule,AtftModule,CarouselModule],
    declarations: [TablesComponent,HeaderComponent],
    providers: [ProductosService]
})
export class TablesModule {}
