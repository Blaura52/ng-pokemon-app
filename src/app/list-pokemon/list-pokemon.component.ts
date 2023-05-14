import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS; //1 On type notre propriété pokemonList en disant que c'est un tableau de pokémons, l'utilisateur devra obligatoirement lui passer une liste de pokémons avec des identifiants, point d evie etc..

  constructor(private router: Router) {} //2 injection du service Router qui va nous permettre d'avoir accès au routeur

  goToPokemon(pokemon: Pokemon) { //2 ma méthode sur laquelle est dirigé l'utilisateur quand on intercepte l'évènement (click) 
    this.router.navigate(['/pokemon', pokemon.id]); //2 on fait appel au routeur dans notre méthode, pour accéder à sa propriété .navigate et en paramètres on a plus qu'à passer l'URL de redirection /pokemons pour revenir à la liste des pokèmonss
  }

}
