import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
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
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    isDragging: boolean;
  carouselData: CarouselData[] = [
    { text: 'Slide 1', src: 'assets/images/Home/Modulo-3/Botella-1-grande.png', dataHash: 'one'},
    { text: 'Slide 2', src: 'assets/images/Home/Modulo-3/Botella-2-pequena.png', dataHash: 'two'},
    { text: 'Slide 3', src: 'assets/images/Home/Modulo-3/Botella-1-grande.png', dataHash: 'three'},
    { text: 'Slide 4', src: 'assets/images/Home/Modulo-3/Botella-2-pequena.png', dataHash: 'four'},
    { text: 'Slide 5', src: 'assets/images/Home/Modulo-3/Botella-1-grande.png', dataHash: 'five'},
    { text: 'Slide 5', src: 'assets/images/Home/Modulo-3/Botella-2-pequena.png', dataHash: 'five'},
    // { text: 'Slide 6', dotContent: 'text5'},
    // { text: 'Slide 7', dotContent: 'text5'},
    // { text: 'Slide 8', dotContent: 'text5'},
    // { text: 'Slide 9', dotContent: 'text5'},
    // { text: 'Slide 10', dotContent: 'text5'},
  ];
  win = Window
  customOptions: any = {
    loop: true,
    // autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots:false,
    responsiveClass:true,
    items: 1,
    responsive:{
        100:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }

  }

  customOptions2: any = {
    loop: true,
    // autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots:true,
    responsiveClass:true,
    responsive:{
        300:{
            items:2
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',

  }

  customOptions3: any = {
    center: true,
    autoWidth: true,
    // autoHeight: false,
    nav: true,
    dots:false,
    rewindNav : true,
    navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Home/Modulo-1/videos.png'>"],
    responsiveClass:true,
    responsive:{
        100:{
            items:2,
            rewindNav : true,
            navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Home/Modulo-1/videos.png'>"],
            nav: true
        },
        600:{
            items: 2,
            rewindNav : true,
            navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Home/Modulo-1/videos.png'>"],
            nav: true
        },
        1000:{
            items: 3
        }
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',

  }

    constructor() {
        if(window.innerWidth < 992){
            this.sliders.push(
                {
                    imagePath: 'assets/images/Home/slides/mobile/slider1.png',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/mobile/slider2.png',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/mobile/slider3.png',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/mobile/slider4.png',
                    label: 'Third slide label',
                }
            );
        }else{
            this.sliders.push(
                {
                    imagePath: 'assets/images/Home/slides/home/slider1.png',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/home/slider2.png',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/home/slider3.png',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/home/slider4.png',
                    label: 'Third slide label',
                }
            );
        }
        this.alerts.push(
            {
                id: 1,
                type: 'assets/images/Home/Modulo-1/Imagen-video-1.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'assets/images/Home/Modulo-1/imagen-video-2.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'assets/images/Home/Modulo-1/imagen-video-2.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'assets/images/Home/Modulo-1/imagen-video-2.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'assets/images/Home/Modulo-1/imagen-video-2.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'assets/images/Home/Modulo-1/imagen-video-2.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'assets/images/Home/Modulo-1/imagen-video-2.png',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {

    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
