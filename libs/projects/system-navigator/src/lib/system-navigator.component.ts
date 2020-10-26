import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SystemNavigatorService } from './system-navigator.service';
import { AppUrl, ServerResponse } from './models';

@Component({
    selector: 'lib-system-navigator',
    templateUrl: './system-navigator.component.html',
    styleUrls: ['./system-navigator.component.scss'],
})
export class SystemNavigatorComponent implements OnInit {
    appUrls: AppUrl[];
    isMenuOpen = false;

    @HostListener('document:click', ['$event'])
    onDocumentClick(event): void {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.isMenuOpen = false;
        }
    }

    @HostListener('document:keyup.escape', ['$event'])
    onEscKeyUp(event: KeyboardEvent) {
        this.isMenuOpen = false;
    }

    constructor(private service: SystemNavigatorService, private eRef: ElementRef) {}

    ngOnInit(): void {
        this.getUrls();
    }

    getUrls(): void {
        this.service.getUrls().subscribe(
            (res: ServerResponse) => {
                this.appUrls = res.data;
            },
            (err) => {
                console.error(err);
            }
        );
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    navigateTo(url: string): void {
        window.location.href = url;
    }
}
