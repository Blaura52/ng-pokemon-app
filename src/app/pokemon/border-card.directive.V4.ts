// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[pkmnBorderCard]'
// })
// export class BorderCardDirective {

//   //1 déclarations de nos 3 nouvelles propriétés : 
//   private initialColor: string = '#f5f5f5'; //1 couleur initiale des bordures afficher au chargement de la page 
//   private defaultColor: string = '#009688'; //1 couleur par défaut si il n'y a pas de couleur définit pour les bordures
//   private defaultHeight: number = 180; //1 hauteur par défaut du cadre pour nos bordures

//   constructor(private el: ElementRef) {
//     this.setBorder(this.initialColor); //1 les couleurs et la hauteur par défaut ne sont plus écrit en dur dans le code car on a créer des propriétés qu'on appelle
//     this.setHeight(this.defaultHeight);
//     //1 this.setBorder('#f5f5f5');
//     //1 this.setHeight(180);
//   }

//   @Input('pkmnBorderCard') borderColor: string; // alias, 
//   // @Input() pkmnBorderCard: string; // sans alias, pkmnBorderCard n'est pas adapté pour la couleur de nos bordure 

//   @HostListener('mouseenter') onMouseEnter() {
//     this.setBorder(this.borderColor || this.defaultColor);
//     //1 this.setBorder(this.borderColor || '#009688');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.setBorder(this.initialColor);
//     //1 this.setBorder('#f5f5f5');
//   }

//   private setBorder(color: string) {
//     let border = 'solid 4px' + color;
//     this.el.nativeElement.style.border = border;
//   }
   
//   private setHeight(height: number) {
//     this.el.nativeElement.style.height = height + 'px';
//   }
// }