import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $: any

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [NgbAccordionConfig]
})
export class FormComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;


    myColor:string="#ffffff";
    configModel:any = {
        color:"0xffffff",
        intensidad:{
            1:"0.9",
            2:"0.5",
            3:"0.8"
        },
        distancia:{
            1:"100",
            2:"100",
            3:"200"
        },
        x:{
            1:"50",
            2:"-50",
            3:"0"
        },
        y:{
            1:"50",
            2:"20",
            3:"-20"
        },
        z:{
            1:"50",
            2:"-50",
            3:"0"
        }
    }
    Table:any=[
        {
            id:1,
            nombre:"Tapa",
            categoria:1,
            marcado:0,
            hasModel:true,
            fov:50,
            near:1,
            far:1100,
            pX:-5,
            pY:0,
            pZ:-10,
            model:"assets/models/modelo1.obj",
            tX:0,
            tY:0,
            tZ:25,
            rX:0,
            rY:0,
            rZ:-25

        },
        {
            id:2,
            nombre:"Envase PET 500 ml Generico 18.5 grs",
            categoria:1,
            marcado:0,
            hasModel:true,
            fov:50,
            near:1,
            far:1100,
            pX:-5,
            pY:0,
            pZ:-50,
            model:"assets/models/mdl_bote_01.obj",
            tX:0,
            tY:-10,
            tZ:0,
            rX:0,
            rY:0,
            rZ:0

        }
    ]
    selectedData:any =
        {
            fov:50,
            near:1,
            far:1100,
            pX:-5,
            pY:0,
            pZ:-50,
            model:"assets/models/mdl_bote_01.obj",
            tX:0,
            tY:-10,
            tZ:0,
            rX:0,
            rY:0,
            rZ:0

        }
    cambiarValor(valor){
        let data = this.selectedData
        this.selectedData=null
        if(valor==1){
            data.tY+=1
            data.model = "assets/models/mdl_preforma_pet_33mm.obj"
        }
        if(valor==2){
            data.tY-=1
        }
        if(valor==3){
            data.tX+=1
        }
        if(valor==4){
            data.tX-=1
        }
        if(valor==5){
            data.rZ+=1
        }
        if(valor==6){
            data.rZ-=1
        }
        if(valor==7){
            data.rX+=1
        }
        if(valor==8){
            data.rX-=1
        }
        if(valor==9){
            data.rY+=10
        }
        if(valor===10){
            data.rY-=10
        }
        this.selectedData= data
        console.log($("#mainControls"));

    }
    escucha(){
        console.log("si");

    }
    constructor(config: NgbAccordionConfig) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        // config.type = 'success';
      }

    ngOnInit() {

    }

    cargarSingle(id){
        let data = this.selectedData
        this.selectedData=null
        data.fov=id.fov
        data.near=id.near
        data.far=id.far
        data.pX=id.pX
        data.pY=id.pY
        data.pZ=id.pZ
        data.model=id.model
        data.tX=id.tX
        data.tY=id.tY
        data.tZ=id.tZ
        data.rX=id.rX
        data.rY=id.rY
        data.rZ=id.rZ
        this.blockUI.start();
        setTimeout(() => {

            this.selectedData=id
            this.blockUI.stop();

        }, 300);
    }
}
