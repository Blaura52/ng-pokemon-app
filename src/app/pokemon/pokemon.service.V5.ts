import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon'; //import pour la méthode getPokemonList()
import { POKEMONS } from './mock-pokemon-list';

@Injectable(//{
//    providedIn: 'root'  On supprime l'injecteur racine pour pouvoir être plus précis en injectant notre pokemonService dans notre pokemon.module où l'on va créer l'option providers dans notre @NgModule 
)//}
export class PokemonService {

  getPokemonList(): Pokemon[] { //méthode qui renverra la liste des pokémons
    return POKEMONS; //on retourne la constante de pokémon, cette constante contient déjà la liste de tout mes pokémons
  }

  getPokemonById(pokemonId: number): Pokemon|undefined { //méthode qui nous renvoie un pokémon selon son identifiant
    return POKEMONS.find(pokemon => pokemon.id == pokemonId); //on part de notre tableau de pokémons et on va chercher le pokémon, grâce à la méthode .find, ayant comme identifiant le paramètre
  } //.find renvoie undefined si il n'a pas de pokémon sinon il en renvoit un

  getPokemonTypeList(): string[] { //méthode pour renvoyer tout les types des pokémons
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]; //retourne un tableau de chaines de caractères
    // faire un peu d'algo pour une petite méthode poour gérer ces types au lieu de les écrire en dur dans le code
}
}
