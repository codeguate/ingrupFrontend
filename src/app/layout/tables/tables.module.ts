import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtftModule } from 'atft';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { HeaderComponent } from './../components/header/header.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,AtftModule,CarouselModule],
    declarations: [TablesComponent,HeaderComponent]
})
export class TablesModule {}
