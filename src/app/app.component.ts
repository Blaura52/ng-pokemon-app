import { Component, OnInit } from '@angular/core'; //import de OnInit pour initialiser notre composant
import { POKEMONS } from './mock-pokemon-list'; //import de la liste Pokémons que j'ai ajouté précédemment depuis le fichier mock-pokemon-list
import { Pokemon } from './pokemon';  //import de l'object Pokemon
@Component({
  selector: 'app-root',
  //1 template: `<h1>Welcome to {{title}}!</h1>` 
  //2 template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`  Vue, affichage de la liste POKEMONS a l'index 0
  template: `<h1>Liste de Pokémons</h1>`
})

export class AppComponent implements OnInit {
  //1 title = 'application de pokémons';  On passe un nom à notre appli
  //2 pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];  On passe trois pokémons en entréé en chaine de caractères.
  //3 pokemonList = POKEMONS;  Constante POKEMONS de l'import de la liste de POKEMONS
  pokemonList: Pokemon[] = POKEMONS; //On type notre propriété pokemonList en disant que c'est un tableau de pokémons, l'utilisateur devra obligatoirement lui passer une liste de pokémons avec des identifiants, point d evie etc..

  //constructor() {
  //   this.pokemonList = []; ❌ très déconseillé de déclarer une variable dans le constructor
  // }

  ngOnInit() { // ou ngOnInit(): void{}, pas obliger de mettre void
    console.table(this.pokemonList);
    //2 this.selectPokemon('Bulbizarre'); la méthode permet d'afficher une chaine de caractère
    this.selectPokemon(this.pokemonList[0]); // on ne veut plus une chaine de caractère, mais un object métier Pokemon car en ayant changé le paramètre de la méthode selectPokemon  on ne respecte plus le contrat d'interface
  }

  //2 selectPokemon(pokemonName: string) { le paramètre de la méthode est une chaine de caractère définit juste en dessous
    selectPokemon(pokemon: Pokemon) { //comme paramètre on type la propriété avec un objet métier Pokemon 
    //2 console.log(`Vous avez cliqué sur le pokémon ${pokemonName} propriété d'avant pour récuper le nom en chaine de caractère
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`); //on récupère la proprièté .name grâce à l'objet pokemon
  }
}
