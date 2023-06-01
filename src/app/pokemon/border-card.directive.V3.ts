// import { Directive, ElementRef, HostListener, Input } from '@angular/core'; //2 ajout de notre anotation HostListener et Input

// @Directive({
//   selector: '[pkmnBorderCard]' //1 '[appBorderCard]' on mets un péfixe personnalisé sur notre sélecteur pour montrer que cette directive s'applique sur les cards des pokémons
// })
// export class BorderCardDirective {

//   constructor(private el: ElementRef) {  //1 el est le paramètre de mon constructeur et il est de type ElementRef qui vient directement du coeur du framework Angular
//     this.setBorder('#f5f5f5'); //1 automatiquement on aura aussi une couleur de bordure #f5f5f5, de 4pixels de d'épaisseur et qui sera un tait continu 
//     this.setHeight(180); //1 automatiquement on aura une hauteur commune de 180pixels
//   }

//   @Input('pkmnBorderCard') borderColor: string; //3 Input va nous permettre d'ajouter une propriété border.color pour paramétrer la couleur des bordures des cartes des pokémons 

//   @HostListener('mouseenter') onMouseEnter() { //2 quand l'utilisateur entre sur un pokémon (en survol avec son curseur), mouseenter est appelé, et on modifit la couleur de notre bordure, pour cela on utilise notre méthose .setBorder
//     this.setBorder(this.borderColor || '#009688'); //on paramètre notre couleur pour quand l'utilisateur passe sur le pokémon la bordure avec la couleur définit apparaisse, OU exprimé par l'opérateur ||, la valeur par défaut
//     //2 console.log("bonjour");
//     //3 this.setBorder('#009688');
//   }

//   @HostListener('mouseleave') onMouseLeave() { //2 quand un utilisateur sors d'un pokémonquand (en survol avec le curseur), mouseleave est appelé, et on réinitialise la couleur de notre bordure à la valeur par défaut, pour cela on utilise notre méthose .se
//     this.setBorder('#f5f5f5');
//     //2 console.log("bonjour2");
//   }

//   // setHeight(height: number) { //1 la méthode setHeight aura en paramètre une hauteur de type number
//   //   this.el.nativeElement.style.height = `${height}px`; //1 on va accéder grâce à this. à ma référence de l'élément du DOM .el et ensuite on appelle une propriété .nativeElementcar elementRef est un encapsuleur par dessus l'élément natif du DOM. 
//   // } //1 et en faisant .nativeElement on accède vraiment à l'élément natif du DOM sur lequel ma directive  sera appelée. Et ensuite on modifie le style directement avec le .style.height et on définit la hauteur avce le ${}, la backstick et les pixels.

//   // setBorder(color: string) { //1 la méthode setBorder aura en paramètre une couleur de type string
//   //   this.el.nativeElement.style.border = `solid 4px ${color}`; //1 pareil que dans setHeight mais on définit le .style.border avec un trait continu avec solid, 4pixels d'épaisseur avec 4px avec ensuite le ${color} et la backstick.
//   // }

//   //2 autre méthode pour écrire les méthodes avec une variable ou parametre et concatenation
//   private setBorder(color: string) {
//     let border = 'solid 4px' + color;
//     this.el.nativeElement.style.border = border;
//   }
   
//   private setHeight(height: number) {
//     this.el.nativeElement.style.height = height + 'px';
//   }
// }