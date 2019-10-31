import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IntegrateRoutingModule } from './integrate-routing.module';
import { IntegrateComponent } from './integrate.component';

@NgModule({
  declarations: [IntegrateComponent],
  imports: [
    CommonModule,
    IntegrateRoutingModule,
    FormsModule,
    NgbModule,
    CarouselModule,
    Ng2Charts,
  ]
})
export class IntegrateModule { }
