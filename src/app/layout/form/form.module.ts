import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtftModule } from 'atft';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { MenuComponent } from './../components/menu/menu.component';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,AtftModule,CarouselModule],
    declarations: [FormComponent,MenuComponent]
})
export class FormModule {}
