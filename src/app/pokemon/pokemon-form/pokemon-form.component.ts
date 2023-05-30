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
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService, //injection de mon PokemonService pour initialiser ngOnInit()
    private router: Router
    ) {} 

  ngOnInit() { //méthode pour avoir la liste des types de pokémons
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add'); //je mets ma propriété isAddForm à true seulement si le router à comme url, ici, quelque chose qui inclut le terme add
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
    //2 console.log('Submit form !'); //on affiche un message dans la console en disant que le formulaire a été soumit
    //2 this.router.navigate(['/pokemon', this.pokemon.id]); //je passe un tableau, d'abord on mets l'URL vers lequel on redirige l'utilisateur et ensuite l'identifiant du pokemon courant
    
    //3 this.pokemonService.updatePokemon(this.pokemon) 
    //  .subscribe((pokemon) => {  //2 je n'avais plus besoin de console.log, au lieu d'afficher juste un message en cas de succes je veux rediriger l'utilisateur à la page du pokémon qu'il vient d'éditer et subscribe permet de m'abonner et regarder les flux qui arrive pour dans le cas où il y est un pokémon
    //    if(pokemon) {    //2 si il y a un pokémon alors
    //      this.router.navigate(['/pokemon', pokemon.id]); //on redirige l'utilisateur vers la page du pokémon en question
    //    }

    //5 this.pokemonService.updatePokemon(this.pokemon) //3 notre API Rest ne renvoit pas de pokemon ou undefined mais null donc on doit d'adapter c'est pour ça que la façon juste au dessus, avec le pokemon en parmametre de la méthose subscribe, ne convient plus car on ne récupère plus un pokémon.
    //  .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id])); //4 dans ma méthode subscribe j'ai passé une fonction qui est la fonction dans le cas où tout va bien où il n'y a pas d'erreur, on pourrait ajouter une seconde fonction en cas d'erreur
    
    if(this.isAddForm) { //5 si isAddForm est true c'est à dire qu'il y a add en terme dans l'url recue
      this.pokemonService.addPokemon(this.pokemon) //5 on ajoute le pokemon, on crée un nouveau pokemon
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id])); //5 on souscrit à ce service avec en paramètre notre pokemon courant, qu'on passe au routeur avec l'url pokemon et l'identifiant du pokémon donné par le serveur, uniquement par le serveur même en front end. L'id vient du serveur lorsqu'on ajoute un nouveau pokémon
      } else { //5 sinon
      this.pokemonService.updatePokemon(this.pokemon) //5  on modifit on édite le pokemon
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id])); //5 et on redirige vers sa page de detail avec un id mais deja predefinit, existant

    }
  }
}