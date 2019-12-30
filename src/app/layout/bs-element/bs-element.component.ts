import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    constructor() {}

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
    
}
