import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

import * as octicons from 'octicons';

@Directive({
    selector: '[octicons]'
})
export class OcticonsDirective implements OnInit {

    @Input() octicons: string;
    @Input() color: string;
    @Input() width: number;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        const el: HTMLElement = this.elementRef.nativeElement;
        el.innerHTML = octicons[this.octicons].toSVG();

        const icon: Node = el.firstChild;
        if (this.color) {
          this.renderer.setStyle(icon, 'fill', this.color);
        }
        if (this.width) {
            this.renderer.setStyle(icon, 'width', this.width);
            this.renderer.setStyle(icon, 'height', '100%');
        }
    }

}
