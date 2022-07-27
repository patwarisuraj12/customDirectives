import { Directive,
         Renderer2,
         ElementRef,
         OnInit,
         HostListener,
         HostBinding
       } from '@angular/core';

@Directive({
  selector: '[appAppHighlighter]'
})
export class AppHighlighterDirective implements OnInit {

  @HostBinding('style.backgroundColor') backColor : string = 'transparent';

  constructor(private renderer : Renderer2 , private elRef : ElementRef) {}

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseenter') mouseenter(eventData : Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'lightPink');
    this.backColor = 'lightPink';
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backColor = 'transparent';
  }

}
