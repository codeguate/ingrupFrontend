import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MarcasService } from "./../../../shared/services/marcas.service";
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
export class CarouselData {
    id?: string;
    text: string;
    dataMerge?: number;
    width?: number;
    dotContent?: string;
    src?: string;
    dataHash?: string;
  }
  declare var $: any

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    Table:any = null
    carouselData: CarouselData[] = [
        { text: 'Bebidas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Bebidas.png', dataHash: 'one'},
        { text: 'Alimentos', src: 'assets/images/Mercados/Modulo-1/menu-principal/Alimentos.png', dataHash: 'two'},
        { text: 'Home Care', src: 'assets/images/Mercados/Modulo-1/menu-principal/Home-care.png', dataHash: 'three'},
        { text: 'Food Service', src: 'assets/images/Mercados/Modulo-1/menu-principal/Food-service.png', dataHash: 'four'},
        { text: 'Resinas Recicladas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Resinas-recicladas.png', dataHash: 'five'},
        // { text: 'Slide 6', dotContent: 'text5'},
        // { text: 'Slide 7', dotContent: 'text5'},
        // { text: 'Slide 8', dotContent: 'text5'},
        // { text: 'Slide 9', dotContent: 'text5'},
        // { text: 'Slide 10', dotContent: 'text5'},
    ];
    customOptions: any = {
        loop: true,
        autoHeight: false,
        autoWidth: true,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav: true,
        rewindNav : true,
        navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
        center: true,
        // navText:["",""],
        dots:true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsiveClass:true,
        responsive:{
            600:{
                items:1
            },
            1000:{
                items:3
            },
            1300:{
                items:5
            }
        }

            // URLhashListener:true,
        // startPosition: 'URLHash',
    }
    constructor(
        private translate: TranslateService,
        public router: Router,
        private mainService:MarcasService
    ) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.cargarAll();
        $(document).ready(function () {
            if($('.owl-nav').hasClass('disabled'))
            {
                $('.owl-nav').removeClass('disabled');
            }
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    cargarAll(){
          let data = {
            id:1,
            state:'0',
            filter:'categoria'
          }
          this.mainService.getAll()
                              .then(response => {
                                this.Table=response
                                console.log(response);
                            }).catch(error => {
                                console.clear
                              })
    }
}
