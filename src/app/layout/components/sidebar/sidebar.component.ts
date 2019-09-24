import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MarcasService } from "./../../../shared/services/marcas.service";
import { TiposService } from "./../../../shared/services/tipos.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    Table:any = []
    TableProds:any = []
    @Output() collapsedEvent = new EventEmitter<boolean>();
    constructor(
        private translate: TranslateService,
        private TiposService:TiposService,
        public router: Router,
        private MarcasService:MarcasService
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
        this.isActive = true;
        this.collapsed = true;
        this.showMenu = '0';
        this.pushRightClass = 'push-right';
        this.cargarAll();
    }
    cargarAll(){

          this.MarcasService.getAll()
                              .then(response => {
                                this.Table=response
                                // console.log(response);
                            }).catch(error => {
                                console.clear
                              })
        this.TiposService.getAll()
                              .then(response => {
                                this.TableProds=response
                                // console.log(response);
                            }).catch(error => {
                                console.clear
                              })
    }
    openMenu(){
        var width_device = window.screen.width;
        if(width_device < 1000){
            this.toggleSidebar();
        }else{
            this.toggleSidebar();
            this.toggleCollapsed();
        }

    }
    openMenu2(){
        var width_device = window.screen.width;
        if(width_device < 1000){
            this.toggleCollapsed();
            this.toggleSidebar();
        }else{
            this.toggleCollapsed();
            this.toggleSidebar();
        }

    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
        if(window.innerWidth <= 992){
            this.collapsed = false;
        }
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
