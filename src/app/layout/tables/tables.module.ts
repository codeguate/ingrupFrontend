import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-6-datatable';

import { AtftModule } from 'atft';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ProductosService } from "./../../shared/services/productos.service";
import { ImagenesService } from "./../../shared/services/imagenes.service";
import { PresentacionesService } from "./../../shared/services/presentaciones.service";
import { SlidesService } from "./../../shared/services/slides.service";
import { NgxGalleryModule } from 'ngx-gallery';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { HeaderComponent } from './../components/header/header.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule,FormsModule, NgbModule,DataTableModule,PageHeaderModule,AtftModule,CarouselModule, NgxGalleryModule],
    declarations: [TablesComponent,HeaderComponent],
    providers: [ProductosService,ImagenesService,PresentacionesService,SlidesService]
})
export class TablesModule {}
