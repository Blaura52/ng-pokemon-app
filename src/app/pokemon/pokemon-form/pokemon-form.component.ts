import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon; //lorsqu'on veut utiliser 'app-pokemon-form' on doit lui passer une propriété d'entrée qui sera un pokémon
  types: string[]; //propriété qui contient un tableau de tout les types dispo dans l'appli

  constructor(
    private pokemonService: PokemonService, //injection de mon PokemonService pour initialiser ngOnInit()
    private router: Router
    ) {} 

  ngOnInit() { //méthode pour avoir la liste des types de pokémons
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean { //méthode pour savoir si le pokémon possède déjà ou non le type passé en paramètre
    return this.pokemon.types.includes(type); //includes renvoie vrai ou faux, si je tape feu et que j'ai Salamèche ça va me renvoyer true sinon ça renvoie false si je tape eau sur Salamèche
  }

  selectType($event: Event, type: string) { //méthode pour prendre en compte le nouveaau type du pokémon, avec petit logique, si l'utilisateur sélectionne un type ici, si le pokemon a déjà le type il faudra lui enlever et si il ne l'a pas il faudra lui ajouter
  // avec $event on veut savoir si il a coché ou décoché et avec type on veut savoir si il a coché le type feu ou si il l'a décoché, cette méthode ne renverra rien elle modifira juste le pokémon courant selon les cases cochées ou pas
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; //du côté template en Angular ça vaut $event.target mais c^té classe du composant il faut caster en as HTMLInputElement; .checked indique si l'utilisateur a coché un case ou non et $event.target pemret de savoir si l'utilisateur à coché ou non dans le DOM
    
    if (isChecked) { //si l'utilisateur a coché ou non la case, la checkbox
      this.pokemon.types.push(type); //si c'est le cas on ajoute le type coché par l'utilisateur au tableau de type du pokémon courant Je prends ces types et je vais pusher le type coché , le type passé en paramètre dans selecType() 
    } else { //sinon c'est que l'utilisateur a décoché le type et dans ce cas je veux retirer le type du tableau de type du pokémon
      const index = this.pokemon.types.indexOf(type); //je vais dans mon tableau de type de pokemon et j'utilise .indexOf pour savoir l'index de mon type décoché, le type que je veux retirer dans le tableau de type du pokémon
      this.pokemon.types.splice(index, 1); //ensuite on modifit le tableau grâce à la méthode .splice() et on lui passe l'index indiqué ou on va retirer l'élément 
    }
  
  }

  isTypesValid(type: string): boolean { //méthode pour créer une regle de validation personnalisée pour le champs du formulaire types des pokémons. En paramètre ce sera une chaine de caracteres et elle renvoit un booléen.

    if (this.pokemon.types.length == 1 && this.hasType(type)) { //si la liste des types du pokemon à la longueur du tableau des types du pokémon égale à 1 et qu'on est sur le type courant, on bloque cette checkbox pour que l'utilisateur ne puisse pas décocher le seul type de son pokémon car le minimum est d'un type par pokémon, par contre il peut en cocher d'autres.
      return false; // ça retourne false pour bloquer l'utilisateur sur le décochage de ce type courant sur lequel son pokémon est 
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) { //c'est l'invers, si la liste des types du pokémon à la longueur du tableau des types du pokémon supérieur à 2, c'est à dire au moins 3 et que le type sur lequel le pokémon est n'est pas le type courant.
      return false; //on retourne false pour bloquer toutes les autres checkboks pour que l'utilisateur ne puisse pas cocher un 4ème types mais par contre il peut décocher d'autres types.
    }
    return true; //l'utilisateur a respecter les règles de validation, son pokémon a entre 1 et 3 types, du coup on lui renvoit true donc ces types sont valides.
  }

  onSubmit() { //méthode pour la validation du type
    console.log('Submit form !'); //on affiche un message dans la console en disant que le formulaire a été soumit
    this.router.navigate(['/pokemon', this.pokemon.id]); //je passe un tableau, d'abord on mets l'URL vers lequel on redirige l'utilisateur et ensuite l'identifiant du pokemon courant
  }
}
