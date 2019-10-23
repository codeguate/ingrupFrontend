import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-6-datatable';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        BlockUIModule.forRoot(),
        TranslateModule,
        NgbDropdownModule,
        NgbAlertModule,
        NgSelectModule,
        DataTableModule
    ],
    declarations: [LayoutComponent, SidebarComponent]
})
export class LayoutModule {}
