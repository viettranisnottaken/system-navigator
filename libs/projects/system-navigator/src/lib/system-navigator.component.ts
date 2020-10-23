import { Component, OnInit } from '@angular/core';
import { SystemNavigatorService } from './system-navigator.service';
import { AppUrl } from './models';

@Component({
    selector: 'lib-system-navigator',
    templateUrl: './system-navigator.component.html',
    styleUrls: ['./system-navigator.component.scss'],
})
export class SystemNavigatorComponent implements OnInit {
    appUrls: AppUrl[];
    isMenuOpen = false;

    constructor(private service: SystemNavigatorService) {}

    ngOnInit(): void {
        this.getUrls();
    }

    getUrls(): void {
        this.service.getUrls().subscribe((res) => {
            this.appUrls = res;
        });
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    navigateTo(url: string): void {
        window.location.href = url;
    }
}
