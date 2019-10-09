import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CategoriasService } from "./../../../shared/services/categorias.service";
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from "./../../form/form.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public pushRightClass: string;
    Table:any=null
    customOptions: any = {
    responsiveClass:true,
    responsive:{
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1300:{
            items:7
        }
    },
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
    dots:false,
    startPosition:this.route.snapshot.paramMap.get("id"),
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',

        // URLhashListener:true,
    // startPosition: 'URLHash',

    }
    constructor(
        private translate: TranslateService,
        private route: ActivatedRoute,
        public router: Router,
        public FormComponent:FormComponent,
        private TiposService:CategoriasService
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
          this.TiposService.getAll()
                              .then(response => {
                                this.Table=response
                                // console.log(response);
                            }).catch(error => {
                                console.clear
                              })
    }
}
