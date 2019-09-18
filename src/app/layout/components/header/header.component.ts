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
  declare var $: any

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
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
        nav: true,
        rewindNav : true,
        navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
        center: true,
        // navText:["",""],
        dots:true,
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
        $(document).ready(function () {
            if($('.owl-nav').hasClass('disabled'))
            {
                $('.owl-nav').removeClass('disabled');
                console.log('si tiene la clase');

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
}
