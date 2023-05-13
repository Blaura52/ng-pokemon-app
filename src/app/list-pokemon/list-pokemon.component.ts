import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS; //On type notre propriété pokemonList en disant que c'est un tableau de pokémons, l'utilisateur devra obligatoirement lui passer une liste de pokémons avec des identifiants, point d evie etc..
}
