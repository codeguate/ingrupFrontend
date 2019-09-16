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
    { text: 'Slide 2', src: 'assets/images/Home/Modulo-3/Botella-2-pequeña.png', dataHash: 'two'},
    { text: 'Slide 3', src: 'assets/images/Home/Modulo-3/Botella-1-grande.png', dataHash: 'three'},
    { text: 'Slide 4', src: 'assets/images/Home/Modulo-3/Botella-2-pequeña.png', dataHash: 'four'},
    { text: 'Slide 5', src: 'assets/images/Home/Modulo-3/Botella-1-grande.png', dataHash: 'five'},
    { text: 'Slide 5', src: 'assets/images/Home/Modulo-3/Botella-2-pequeña.png', dataHash: 'five'},
    // { text: 'Slide 6', dotContent: 'text5'},
    // { text: 'Slide 7', dotContent: 'text5'},
    // { text: 'Slide 8', dotContent: 'text5'},
    // { text: 'Slide 9', dotContent: 'text5'},
    // { text: 'Slide 10', dotContent: 'text5'},
  ];
  customOptions: any = {
    loop: true,
    autoWidth: true,
    autoHeight: true,
    autoplay: true,
    nav: false,
    center: true,
    dots:true,
    items: 1,
        // URLhashListener:true,
    // startPosition: 'URLHash',

  }

  customOptions2: any = {
    loop: true,
    // autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots:true,
    items: 5,
        // URLhashListener:true,
    // startPosition: 'URLHash',

  }

    constructor() {

        this.sliders.push(
            // {
            //     imagePath: 'assets/images/Home/Modulo-1/Imagen-video-1.png',
            //     label: 'First slide label',
            //     text:
            //         'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            // },
            // {
            //     imagePath: 'assets/images/Home/Modulo-1/imagen-video-2.png',
            //     label: 'Second slide label',
            //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            // },
            {
                imagePath: 'assets/images/Home/Modulo-1/foto-de-fondo.png',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
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
