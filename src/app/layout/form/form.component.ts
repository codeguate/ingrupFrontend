import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {CategoriasService } from "./../../shared/services/categorias.service";
import {ProductosService } from "./../../shared/services/productos.service";
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

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

    public id:number = null
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
    Table:any= [];
    selectedData:any =
        {
            fov:50,
            hasModel:false,
            near:1,
            far:1100,
            pX:-5,
            pY:0,
            pZ:-50,
            model:"assets/models/mdl_bote_01.obj",
            material:"assets/models/mdl_bote_01.mtl",
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
    constructor(
        config: NgbAccordionConfig,
        private ProductosService:ProductosService,
        private route: ActivatedRoute,
        private CategoriasService:CategoriasService
    ) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        // config.type = 'success';
      }
      galleryOptions: NgxGalleryOptions[];
      galleryImages: NgxGalleryImage[];
    ngOnInit() {
        this.getParams();
        this.galleryOptions = [
            {
                width: '90%',
                height: '600px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.resetCarousel();
    }

    resetCarousel(){
        this.galleryImages = [
            {
                small: 'assets/images/slider1.jpg',
                medium: 'assets/images/slider1.jpg',
                big: 'assets/images/slider1.jpg'
            },
            {
                small: 'assets/images/slider2.jpg',
                medium: 'assets/images/slider2.jpg',
                big: 'assets/images/slider2.jpg'
            },
            {
                small: 'assets/images/slider3.jpg',
                medium: 'assets/images/slider3.jpg',
                big: 'assets/images/slider3.jpg'
            }
        ];
    }
    getParams(){
        this.id = +this.route.snapshot.paramMap.get("id");
        if(this.id){
            this.cargarOfCate(this.id,false)
        }
    }
    cargarSingle(id:number){
    this.blockUI.start();
      let data = {
        id:1,
        state:'0',
        filter:'evento'
      }
      console.log("antes:"+this.selectedData.id+" Ahora"+id);

      let datas = this.selectedData
        this.selectedData=null
      this.ProductosService.getSingle(id)
                          .then(response => {
                            response.pX = +response.pX;
                            response.pY = +response.pY;
                            response.pZ = +response.pZ;
                            response.tX = +response.tX;
                            response.tY = +response.tY;
                            response.tZ = +response.tZ;
                            response.rX = +response.rX;
                            response.rY = +response.rY;
                            response.rZ = +response.rZ;
                            response.near = +response.near;
                            response.far = +response.far;
                            response.fov = +response.fov;
                            response.hasModel = +response.hasModel;
                            response.material = response.model.replace('.obj',".mtl")
                            this.selectedData=response
                            if(response.imagenes && response.imagenes.length>0){
                                let data = []
                                response.imagenes.forEach(element => {
                                    let obj = {
                                        small: element.src,
                                        medium: element.src,
                                        big: element.src
                                    }
                                    data.push(obj)
                                });
                                this.galleryImages = data
                            }else{
                                this.resetCarousel();

                            }
                            // console.log(response);
                            this.blockUI.stop();
                        }).catch(error => {
                            console.clear
                            this.blockUI.stop();
                          })
    }
    cargarAll(){
        this.blockUI.start();
          let data = {
            id:1,
            state:'0',
            filter:'categoria'
          }
          this.ProductosService.getAll()
                              .then(response => {
                                this.Table=response
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear
                                this.blockUI.stop();
                              })
    }

    cargarOfCate(id:number,changeUrl:boolean=false){
        if(changeUrl){
            this.id=id
        }
        this.blockUI.start();
          let data = {
            id:this.id,
            state:'0',
            filter:'categoria'
          }
          this.ProductosService.getAllFilter(data)
                              .then(response => {
                                this.Table=response
                                console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear
                                this.blockUI.stop();
                              })
    }


}
