import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $: any
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers: [NgbAccordionConfig]
})
export class BlankPageComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    constructor(config: NgbAccordionConfig) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        config.type = 'success';
      }

    ngOnInit() {
        this.blockUI.start();
        const data = {
            id:1,
            state:'0',
            filter:'evento'
        };
        setTimeout(() => {
            this.blockUI.stop();
        }, 2000);
        //this.blockUI.stop();
    }
    button_mapa(){
        console.log("funcion");
    }
    status: boolean = false;
    clickEvent(){
        this.status = !this.status;
    }
}
