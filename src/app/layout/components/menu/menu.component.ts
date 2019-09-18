import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public pushRightClass: string;
    carouselData:any = [
        { id:1, titulo: 'Cajas Agricolas', src: 'assets/images/Productos/Modulo-1/Iconos/Cajas-agricolas.png', dataHash: 'one'},
        { id:2, titulo: 'Cajillas', src: 'assets/images/Productos/Modulo-1/Iconos/Cajillas.png', dataHash: 'two'},
        { id:3, titulo: 'Envases', src: 'assets/images/Productos/Modulo-1/Iconos/Envases.png', dataHash: 'three'},
        { id:4, titulo: 'Empaque Flexible', src: 'assets/images/Productos/Modulo-1/Iconos/Empaque-flexible-op2.png', dataHash: 'four'},
        { id:5, titulo: 'Empaque Flexible', src: 'assets/images/Productos/Modulo-1/Iconos/Empaque-flexible.png', dataHash: 'four'},
        { id:6, titulo: 'Preformas', src: 'assets/images/Productos/Modulo-1/Iconos/Preformas.png', dataHash: 'four'},
        { id:7, titulo: 'Tapas', src: 'assets/images/Productos/Modulo-1/Iconos/Tapas.png', dataHash: 'four'},
        { id:8, titulo: 'Empaque Litografico', src: 'assets/images/Productos/Modulo-1/Iconos/Empaque-litografico.png', dataHash: 'five'},
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
      public sliders: Array<any> = [];
    constructor(private translate: TranslateService, public router: Router) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
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
}
