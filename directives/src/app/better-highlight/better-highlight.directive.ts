    import {
        Directive, ElementRef, Renderer2, HostBinding, Input, HostListener
    } from '@angular/core';
  
    @Directive({
      selector: '[appBetterHighlight]'
    })
    export class BetterHighlightDirective{
        @HostBinding('style.backgroundColor') backgroundColor: string;
        @Input() defaultColor: string = 'transparent';
        @Input() highlightColor: string = 'blue';
      
        constructor(private elRef: ElementRef, private renderer: Renderer2){
            
        }
        ngOnInit(){
          //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
          this.backgroundColor = this.defaultColor;
       
        }
        @HostListener('mouseenter') mouseover(eventData: Event) {
            this.backgroundColor = this.highlightColor;
        }
        
        @HostListener('mouseleave') mouseleave(eventData: Event) {
           this.backgroundColor = this.defaultColor;
        }

    }

