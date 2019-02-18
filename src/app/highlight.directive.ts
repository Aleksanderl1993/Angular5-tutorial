import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private element: ElementRef) {
        //   element.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') highlight() {
        this.element.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') cancelHighlight() {
        setTimeout(() => {
            this.element.nativeElement.style.backgroundColor = null;
        }, 2000);
    }

}
