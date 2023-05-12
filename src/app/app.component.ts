import { Component, OnInit } from '@angular/core'; //import de OnInit pour initialiser notre composant
import { POKEMONS } from './mock-pokemon-list'; //import de la liste Pokémons que j'ai ajouté précédemment depuis le fichier mock-pokemon-list
import { Pokemon } from './pokemon';  //import de l'object Pokemon
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' 
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS; //On type notre propriété pokemonList en disant que c'est un tableau de pokémons, l'utilisateur devra obligatoirement lui passer une liste de pokémons avec des identifiants, point d evie etc..
  pokemonSelected: Pokemon | undefined; //on rajoute le type Undefined pour supprimer notre erreur dans la condition ifelse(pokemon) car en bas on se sers de type Undefined, donc il faut le déclarer ici pour que ça fonctionne

  ngOnInit() {
    console.table(this.pokemonList);
  } 
  
  selectPokemon(pokemonId: number) { //selectPokemon(pokemonId: string)
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if(pokemon){
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
 