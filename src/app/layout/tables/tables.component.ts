import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MarcasService } from "./../../shared/services/marcas.service";
import {CategoriasService } from "./../../shared/services/categorias.service";
import {ProductosService } from "./../../shared/services/productos.service";
import {ImagenesService } from "./../../shared/services/imagenes.service";
import {SlidesService } from "./../../shared/services/slides.service";
import {PresentacionesService } from "./../../shared/services/presentaciones.service";
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { source } from "./../../../environments/config";
import { Lightbox } from 'ngx-lightbox';

declare var $: any
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    private basePath:string = source.production?source.url:source.urlDev;
    Marcas:any= null;
    session:boolean = localStorage.getItem('currentUser')?true:false;
    closeResult: string;
    abierto:boolean = false;
    @BlockUI() blockUI: NgBlockUI;
    titulo_texto:any="";
    static Cover = 'cover';
    static Contain = 'contain';
    imagen:any = ""
    customOptions: any = {
        loop: false,
        // autoHeight: false,
        // autoWidth: false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin: 0,
        nav: true,
        rewindNav : true,
        navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
        center: true,
        // navText:["",""],
        dots:false,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        // startPosition:this.Marcas?this.Marcas.submarca.findIndex(element => { element.id==this.route.snapshot.paramMap.get('mercado') }):this.route.snapshot.paramMap.get('mercado'),
        responsiveClass:true,
        responsive:{
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
    }
    datoPEnviar={
        titulo:"Mercados",
        mercados:[]
    }
    datoPEnviar2={
        titulo:"",
        mercados:[]
    }
    customOptions2: any = {
        loop: false,
        autoplay: false,
        center: false,
        dots:false,
        margin:0,
        responsiveClass:true,
        items:4,
        responsive:{
            300:{
                nav: true,
                rewindNav : true,
                navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
                items:2
            },
            600:{
                nav: true,
                rewindNav : true,
                navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
                items: 3
            },
            1000:{
                nav: true,
                rewindNav : true,
                navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
                items: 4
            }
        },
        nav: true,

            // URLhashListener:true,
        // startPosition: 'URLHash',

      }
      carouselData:any = [
        { text: 'Slide 1', src: 'assets/images/Nosotros/titulo1.png', dataHash: 'one'},
        { text: 'Slide 2', src: 'assets/images/Nosotros/titulo2.png', dataHash: 'two'},
        { text: 'Slide 3', src: 'assets/images/Nosotros/titulo3.png', dataHash: 'three'},
        { text: 'Slide 4', src: 'assets/images/Nosotros/titulo4.png', dataHash: 'four'},
        { text: 'Slide 5', src: 'assets/images/Nosotros/titulo5.png', dataHash: 'five'},
        { text: 'Slide 6', src: 'assets/images/Nosotros/titulo6.png', dataHash: 'five'},
        { text: 'Slide 7', src: 'assets/images/Nosotros/titulo7.png', dataHash: 'five'},
        // { text: 'Slide 6', dotContent: 'text5'},
        // { text: 'Slide 7', dotContent: 'text5'},
        // { text: 'Slide 8', dotContent: 'text5'},
        // { text: 'Slide 9', dotContent: 'text5'},
        // { text: 'Slide 10', dotContent: 'text5'},
      ];
  win = Window

    public edition:any
    public categoriasCombo:any
    public id:number = null
    public idF:number = null
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
            hasModel:false,
            fov:50,
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
            data.rZ+= 1
        }
        if(valor==6) {
            data.rZ-=1
        }
        if(valor==7) {
            data.rX+=1
        }
        if(valor== 8) {
            data.rX-=1
        }
        if(valor==9) {
            data.rY +=10
        }
        if(valor===10) {
            data.rY-= 10;
        }
        this.selectedData= data;
        // console.log($('#mainControls'));

    }
    escucha() {
        console.log('si');

    }
    constructor(
        config: NgbAccordionConfig,
        private modalService: NgbModal,
        private ProductosService:ProductosService,
        private MarcasService:MarcasService,
        private _lightbox: Lightbox,
        private route: ActivatedRoute,
        private ImagenesService:ImagenesService,
        private SlidesService:SlidesService,
        private PresentacionesService:PresentacionesService,
        private CategoriasService:CategoriasService
    ) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        // config.type = 'success';
      }
    galleryOptions: NgxGalleryOptions[];
    galleryOptions2: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    galleryImages2:any = [];
    scrollMyDiv(item) {
        let section = item;
        // window.scrollTo(0, 0);  // reset window to top
        const elem = document.querySelector('#' + section);
        // console.log(parseInt(elem.scrollHeight+''));

        let offsetTop = parseInt(elem.scrollHeight+'');
        if(window.innerWidth < 992){
            if(offsetTop>500){
                window.scrollTo(0, 1500);

            }else{
                setTimeout(() => {
                    window.scrollTo(0, 500);
                }, 300);
            }
        }else{
            if(offsetTop>200){
                if(section=="Galeria"){
                    window.scrollTo(0, 1500);
                }else{
                    window.scrollTo(0, 800);

                }

            }else{
                if(offsetTop<100){
                        window.scrollTo(0, 1500);
                }else{
                    setTimeout(() => {
                        window.scrollTo(0, offsetTop);
                    }, 300);
                }

            }
        }


      }
    ngOnInit() {

        this.getParams();
        this.cargarCombosMarcas();
        this.galleryOptions = [
            {
                width: '90%',
                height: '600px',
                imagePercent: 60,
                imageSwipe:true,
                imageInfinityMove:true,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnailsColumns: 4,
                thumbnailsMargin: 10,
                thumbnailMargin: 10,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 60,
                imageSwipe:true,
                imageInfinityMove:true,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnailsColumns: 4,
                thumbnailsMargin: 10,
                thumbnailMargin: 10,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryOptions2 = [
            {
                width: '90%',
                height: '600px',
                imagePercent: 60,
                imageSwipe:true,
                imageInfinityMove:true,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnails: false,
                imageSize: "Cover" 
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 60,
                imageSwipe:true,
                imageInfinityMove:true,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnails: false,
                imageSize: "Cover" 
            },
            // max-width 400
            {
                breakpoint: 400,
                imagePercent: 60,
                imageSwipe:true,
                imageInfinityMove:true,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                preview: false,
                thumbnails: false,
                imageSize: "Cover" 
            }
        ];

        this.resetCarousel();
        $(document).ready(function () {
            if($('.slides-ingrup .owl-nav').hasClass('disabled'))
            {
                $('.slides-ingrup .owl-nav').removeClass('disabled');
            }
        });
    }
    resetCarousel(){
        this.galleryImages = [
            {
                small: 'http://placehold.it/1000X500?text=X',
                medium: 'http://placehold.it/1000X500?text=X',
                big: 'http://placehold.it/1000X500?text=X'
            },
            {
                small: 'http://placehold.it/1000X500?text=X',
                medium: 'http://placehold.it/1000X500?text=X',
                big: 'http://placehold.it/1000X500?text=X'
            }
        ];
    }
    getParams() {
        $(".galeria").focus();
        let data = this.route.snapshot.paramMap.get('id');
        if(data) {
            {
                this.id = +data;
                this.cargarOfMarca(this.id,false);
            }
        }

        data = this.route.snapshot.paramMap.get('mercado');
        if(data) {
            {
                this.idF = +(data);

                // startPosition:this.Marcas?this.Marcas.submarca.findIndex(element => { element.id==this.route.snapshot.paramMap.get('mercado') }):this.route.snapshot.paramMap.get('mercado'),

                this.cargarOfCate(this.id,false);
            }
        }
    }
    cargarSingle(id:number) {
        this.resetCarousel();

    this.blockUI.start();
      const data = {
        id:1,
        state:'0',
        filter:'evento'
      };
    //   console.log('antes:'+this.selectedData.id+' Ahora'+id);
    this.scrollMyDiv('Galeria');
    //   console.log(this.idF)
      const datas = this.selectedData;
        this.selectedData=null;
      this.ProductosService.getSingle(id)
                          .then(response => {
                            this.customOptions2.nav = true
                            // console.log(response.id);
                            response.pX = +response.pX;
                            response.pY = +response.pY;
                            response.pZ = +response.pZ;
                            response.tX = +response.tX;
                            response.tY = +response.tY;
                            response.tZ = +response.tZ;
                            response.rX = +response.rX;
                            response.rY = +response.rY;
                            response.categoria = +response.categoria;
                            response.rZ = +response.rZ;
                            response.near = +response.near;
                            response.far = +response.far;
                            response.fov = +response.fov;
                            response.calibress = false;
                            if(response.presentaciones && response.presentaciones.length>0){
                                let data = []
                                response.presentaciones.forEach(element => {
                                    if(element.calibres && element.calibres.length>0){
                                        element.calibres = element.calibres?element.calibres.replace(/,/g," / "):'';
                                        response.calibress=true;
                                    }
                                });
                                this.galleryImages = data
                            }else{
                                this.resetCarousel();
                            }

                            response.hasModel = +response.hasModel;
                            response.material = response.model.replace('.obj','.mtl');
                            this.selectedData=response;

                            if(response.imagenes && response.imagenes.length>0){
                                let data = []
                                let data2 = []
                                response.imagenes.forEach(element => {
                                    let obj = {
                                        small: element.src,
                                        medium: element.src,
                                        big: element.src
                                    }
                                    let obj2 = {
                                        src: element.src,
                                        caption: element.src,
                                        thumb: element.src
                                    }
                                    data.push(obj)
                                    data2.push(obj2)
                                });
                                this.galleryImages = data
                                this.galleryImages2 = data2
                            }else{
                                this.resetCarousel();
                            }
                            if(response.slides && response.slides.length>0){
                                let data = []
                                response.slides.forEach(element => {
                                    let obj = {
                                        src: element.src,
                                        text: element.src,
                                        hash: element.src
                                    }
                                    data.push(obj)
                                });
                                this.carouselData = data

                                setTimeout(() => {
                                    $('.owl-nav').removeClass('disabled');
                                    this.scrollMyDiv('Galeria');
                                }, 500);
                                // console.log(this.customOptions2);

                            }

                            this.blockUI.stop();
                        }).catch(error => {
                            console.clear;
                            this.blockUI.stop();
                          });
    }
    openGallery(index: number): void {
        // open lightbox
        this._lightbox.open(this.galleryImages2, index,{ fitImageInViewPort: true, showImageNumberLabel: false,centerVertically:true, albumLabel:"" });
    }
    openGallery2(){
        $('.ngx-gallery-clickable').click();
    }
    cargarAll() {
        this.blockUI.start();
          const data = {
            id:1,
            state:'0',
            filter:'categoria'
          };
          this.ProductosService.getAll()
                              .then(response => {
                                this.Table=response;
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });
    }

    cargarOfCate(id:number,changeUrl:boolean=false) {
        // this.datoPEnviar2.mercados.pop()
        this.resetCarousel();

        if(changeUrl) {
            this.idF = id;
        }
        this.blockUI.start();
          const data = {
            id:this.idF,
            state:'0',
            filter:'tipo'
          };
          this.ProductosService.getAllFilter(data)
                              .then(response => {
                                this.Table = response;
                                this.Marcas.submarca.forEach(element => {
                                    if(element.id==data.id){
                                        this.agregarMercado(element)
                                    }
                                });

                                this.datoPEnviar2 = this.datoPEnviar
                                // console.log(this.datoPEnviar2);

                                this.blockUI.stop();
                                this.scrollMyDiv('stinkyEnd');
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });
    }

    agregarMercado(dat){
        let data = {
            icon:"fa-bar-chart-o",
            nombre:dat.nombre
        }
        // console.log(dat);
        if(dat.padre){
            this.datoPEnviar2.mercados.pop();
        }
        if(dat.fotoDefault){
            let data2 = []
            let data3 = []
            let obj = {
                small: dat.fotoDefault,
                medium: dat.fotoDefault,
                big: dat.fotoDefault
            }
            let obj2 = {
                src: dat.fotoDefault,
                caption: dat.fotoDefault,
                thumb: dat.fotoDefault
            }
            data2.push(obj)
            data3.push(obj2)
            this.galleryImages = data2
            this.galleryImages2 = data3
        }

        this.datoPEnviar.mercados.push(data)
    }
    cargarOfMarca(id: number, changeUrl: boolean= false) {
        this.datoPEnviar.mercados.length = 0;
        if (changeUrl) {
            this.id = id;
        }
        this.blockUI.start();
          const data = {
            id: this.id,
            state: '0',
            filter: 'tipo'
          };
        //   console.log(id)
          this.MarcasService.getSingle(id)
                              .then(response => {
                                this.Marcas = response;
                                this.datoPEnviar.mercados.pop();
                                this.agregarMercado(response)
                                this.titulo_texto=response.nombre;
                                if(response.submarca.length<1){
                                    this.cargarOfCate(id,true)
                                }else{

                                    let first = response.submarca?response.submarca[0].id:1;
                                    let index = response.submarca?((response.submarca.findIndex(element => {return element.id==this.idF}))>0?response.submarca.findIndex(element => {return element.id==this.idF})-1:1):1;
                                    this.customOptions.startPosition = index
                                    if(this.route.snapshot.paramMap.get('mercado')){
                                        this.cargarOfCate(first,false)


                                    }else{
                                        this.cargarOfCate(first,true)

                                    }
                                    this.scrollMyDiv('Galeria');

                                }
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });
    }
    cargarFotos(id:number){
        this.blockUI.start();
          const data = {
            id: this.id,
            state: '0',
            filter: 'tipo'
          };
        //   console.log(id)
          this.MarcasService.getSingle(id)
                              .then(response => {
                                this.Marcas = response;
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });

    }


    cargarCombosMarcas(){

        //   console.log(id)
          this.CategoriasService.getAll()
                              .then(response => {
                                this.categoriasCombo = response;
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });

    }

    open(content,id,tipo) {
        this.edition = null

        switch(tipo){
            case "categorias":{
            this.abierto=true;
                this.CategoriasService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "categoriasC":{
            this.abierto=true;
            this.ProductosService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        response.nombre=""
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.edition.id = null;
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });

                break;
            }
            case "productos":{
        this.abierto=true;
                this.ProductosService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "productosC":{
                this.abierto=true;

                this.ProductosService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.edition.id = null;
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "presentacion":{
        this.abierto=true;
                this.PresentacionesService.getSingle(id)
                      .then(response => {
                        console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "presentacionC":{
                    this.abierto=true;
                        let data ={
                            nombre:"",
                            descripcion:"",
                            producto:id,
                            tipos:tipo,
                            tipo:tipo,
                            unidades:0,
                            calibres:"",
                            separador:"",
                            material:"",
                            peso:"",
                            cuello:"",
                            altura:"",
                            largo:0
                        }
                        this.edition=data;
                        this.blockUI.stop();

                break;
            }
            case "galeria":{
                this.abierto=true;
                if(id){
                    this.ProductosService.getSingle(id)
                                            .then(response => {
                                            // console.log(response);
                                            this.edition=response;
                                            this.edition.tipos = tipo
                                            this.blockUI.stop();
                                        }).catch(error => {
                                            console.clear;
                                            this.blockUI.stop();
                                            });
                }else{
                    let data = {
                        tipos:tipo
                    }
                    this.edition = data
                    this.blockUI.stop();
                }

                break;
            }
            case "slides":{
        this.abierto=true;
                if(id){
                    this.ProductosService.getSingle(id)
                                            .then(response => {
                                            // console.log(response);
                                            this.edition=response;
                                            this.edition.tipos = tipo
                                            this.blockUI.stop();
                                        }).catch(error => {
                                            console.clear;
                                            this.blockUI.stop();
                                            });
                }else{
                    let data = {
                        tipos:tipo
                    }
                    this.edition = data
                    this.blockUI.stop();
                }

                break;
            }
        }
        if(content){
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.abierto=false;
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }

    }

    guardarImg(){
        this.imagen = $('#imagenComentario').attr("src")
        if(this.imagen!=""){
            let categoria = $("#multiInsert").prop('checked')
            // console.log(categoria);

            let data = null
            if(categoria){
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                    categoria: this.edition.categoria,
                  }
            }else{
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                  }
            }
          this.blockUI.start();
          this.ImagenesService.create(data)
                            .then(response => {
                                this.imagen = response.url
                                // console.log(response);
                                if(response.id){
                                  $('#imagenComentario').attr("src",'http://placehold.it/500X500?text=X');
                                  $('#uploadImagenComentario').attr("value",'');
                                  this.imagen="";
                                  this.open(null,this.edition.id,'galeria');
                                }
                                console.clear
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear

                                this.blockUI.stop();
                                alert(error)
                            })
        }

      }
      guardarSlide(){
        this.imagen = $('#imagenComentarioSlide').attr("src")
        if(this.imagen!=""){
            let categoria = $("#multiInsertSliders").prop('checked')

            let data = null
            if(categoria){
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                    categoria: this.edition.categoria,
                  }
            }else{
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                  }
            }

          this.blockUI.start();
          this.SlidesService.create(data)
                            .then(response => {
                                this.imagen = response.url
                                // console.log(response);
                                if(response.id){
                                  $('#imagenComentarioSlide').attr("src",'http://placehold.it/500X500?text=X');
                                  $('#uploadimagenComentarioSlide').attr("value",'');
                                  this.imagen="";
                                  this.open(null,this.edition.id,'slides');
                                }
                                console.clear
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear

                                this.blockUI.stop();
                                alert(error)
                            })
        }

      }
      subirImagenes(archivo,form,id){
        var archivos=archivo.srcElement.files;
        // ${this.basePath}/
        let url = `${this.basePath}/api/upload`

        var i=0;
        var size=archivos[i].size;
        var type=archivos[i].type;
            if(size<(5*(1024*1024))){
              if(type=="image/png" || type=="image/jpeg" || type=="image/jpg"){
            $("#"+id).upload(url,
                {//upload started
                  avatar: archivos[i],
                  carpeta: "ProductosIngrup"
              },
              function(respuesta)
              {//Upload Successfull
                console.log(respuesta);

                $('#imagenComentario').attr("src",'')
                $('#imagenComentario').attr("src",respuesta)
                $("#"+id).val('')
                $("#barra_de_progreso").val(0)
                $('#guardarImagenes').attr("disabled",false)
                $("#stopLoader").click();
              },
              function(progreso, valor)
              {//Received progress

                $("#barra_de_progreso").val(valor);
              },
              function (error){
                  console.log(error);

              }
            );
              }else{
                alert("El tipo de imagen no es valido")
              }
          }else{
            alert("La imagen es demaciado grande")
          }
    }
    subirSlides(archivo,form,id){
        var archivos=archivo.srcElement.files;
        // ${this.basePath}/
        let url = `${this.basePath}/api/upload`

        var i=0;
        var size=archivos[i].size;
        var type=archivos[i].type;
            if(size<(5*(1024*1024))){
              if(type=="image/png" || type=="image/jpeg" || type=="image/jpg"){
            $("#"+id).upload(url,
                {
                  avatar: archivos[i],
                  carpeta: "ProductosIngrupSlides"
              },
              function(respuesta)
              {
                $('#imagenComentarioSlide').attr("src",'')
                $('#imagenComentarioSlide').attr("src",respuesta)
                $("#"+id).val('')
                $("#barra_de_progreso2").val(0)
                $('#guardarImagenesSlide').attr("disabled",false)
                $("#stopLoader2").click();
              },
              function(progreso, valor)
              {

                $("#barra_de_progreso").val(valor);
              }
            );
              }else{
                alert("El tipo de imagen no es valido")
              }
          }else{
            alert("La imagen es demaciado grande")
          }
    }

  update(formValue:any){
      formValue = this.edition
        this.blockUI.start();
    switch (formValue.tipos) {
        case "categorias":{
            this.CategoriasService.update(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.getParams();
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "productos":{
            this.ProductosService.update(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.getParams();
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "presentacion":{
            this.PresentacionesService.update(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.cargarSingle(response.producto);
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
    }


  }

  create(formValue:any){
      formValue = this.edition
        this.blockUI.start();
    switch (formValue.tipos) {
        case "categoriasC":{
            formValue.descripcion = formValue.nombre
            formValue.tipo = formValue.categoria
            formValue.codigo = btoa(formValue.nombre).substr(0,10);
            this.ProductosService.create(formValue)
                                    .then(response => {
                                        // console.log(response);
                                        this.getParams();
                                        console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear
                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "productosC":{
            formValue.descripcion = formValue.nombre
            formValue.codigo = btoa(formValue.nombre).substr(0,10);
            this.ProductosService.create(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.getParams();
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "presentacionC":{
            this.PresentacionesService.create(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.cargarSingle(response.producto);
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
    }


  }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    eliminarIMG(id:string){
        this.blockUI.start();
        if(confirm("¿Desea eliminar la Foto?")){
          this.ImagenesService.delete(id)
                            .then(response => {
                                if(response){
                                    this.cargarSingle(response.producto)
                                }
                              this.open(null,response.producto,'galeria')
                              console.clear
                              this.blockUI.stop();
                          }).catch(error => {
                              console.clear
                              this.blockUI.stop();
                            })
        }else{
          $('#Loading').css('display','none')
        }

      }
      eliminarSlides(id:string){
          this.blockUI.start();
          if(confirm("¿Desea eliminar la Foto?")){
            this.SlidesService.delete(id)
                              .then(response => {
                                if(response){
                                    this.cargarSingle(response.producto)
                                }
                                this.open(null,response.producto,'slides')
                                console.clear
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear
                                this.blockUI.stop();
                              })
          }else{
            $('#Loading').css('display','none')
          }

        }
        delete(data:any){
            console.log("eliminando: ",data.tipos);

            this.blockUI.start();
            switch (data.tipos) {
                case "categorias":{
            console.log("eliminando2");

                    this.CategoriasService.delete(data.id)
                                            .then(response => {
                                            console.log(response);
                                            this.abierto=false
            console.log("eliminado");
            this.getParams();
                                            console.clear
                                            this.blockUI.stop();
                                            }).catch(error => {
                                            console.clear

                                            this.blockUI.stop();
                                            })
                                            break;
                }
                case "productos":{
                    this.ProductosService.delete(data.id)
                                .then(response => {
                                  console.clear
                                  this.cargarOfCate(response.categoria)
                                  this.edition = null
                                //   location.reload();
                                  this.blockUI.stop();
                              }).catch(error => {
                                  console.clear
                                  this.blockUI.stop();
                                })
                                break;
                }
                case "presentacion":{
                    this.PresentacionesService.delete(data.id)
                                                .then(response => {
                                                console.clear
                                                this.cargarSingle(response.producto)
                                                this.blockUI.stop();
                                            }).catch(error => {
                                                console.clear
                                                this.blockUI.stop();
                                                })
                                            break;
                }
            }

          }
        cambiarIMG(index,text,cant,url:string=""){
            if(url.indexOf("01")<0){
                cant=4;
            }else{
                cant=6
            }
            this.Table[index].foto = this.Table[index].foto.substring(0,this.Table[index].foto.length-cant)+text
    
            // console.log(this.Table[index].foto);
    
        }
}
