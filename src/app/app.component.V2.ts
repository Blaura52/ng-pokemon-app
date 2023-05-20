// import { Component, OnInit } from '@angular/core'; //import de OnInit pour initialiser notre composant
// import { POKEMONS } from './pokemon/mock-pokemon-list'; //import de la liste Pokémons que j'ai ajouté précédemment depuis le fichier mock-pokemon-list
// import { Pokemon } from './pokemon/pokemon';  //import de l'object Pokemon
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html' 
// })

// export class AppComponent implements OnInit {
//   pokemonList: Pokemon[] = POKEMONS; //On type notre propriété pokemonList en disant que c'est un tableau de pokémons, l'utilisateur devra obligatoirement lui passer une liste de pokémons avec des identifiants, point d evie etc..
//   //4 pokemonSelected: Pokemon; propriété de type Pokemon lorsqu'un utilisateur a cliqué sur un pokémon
//   pokemonSelected: Pokemon|undefined; //on raoute le type Undefined pour supprimer notre erreur dans la condition ifelse(pokemon) car en bas on se sers de type Undefined, donc il faut le déclarer ici pour que ça fonctionne

//   ngOnInit() {
//     console.table(this.pokemonList);
//     //1 this.selectPokemon(this.pokemonList[0]); on veut un object métier Pokemon qui se trouve dans la liste POKEMONS, pour la démo mais après on en a plus besoin
//   }

//   //1 selectPokemon(pokemon: Pokemon) { comme paramètre on type la propriété avec un objet métier Pokemon 
//   //2 selectPokemon(event: MouseEvent) {  
//     selectPokemon(pokemonId: string) { 
//       //3 const id = +pokemonId;
//       //2 const index: number = +(event.target as HTMLInputElement).value; on récupére l'index que l'utilisateur a saisi avec le .target as HTMLInputElement et la valeur avec .value. Le + va permettre de convertir la constante index de string en number
      
//       // const index = id + 1 pas testé, pas servi, juste proposition; Pourrai être le propriété déclarée dans la méthode selectPokemon() mais elle est assez technique, permet d'accéder au tableau + 1 
//       //3 pokemon: Pokemon = this.pokemonList.find(pokemon => pokemon.id == pokemonId);
//       const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

//       if(pokemon){
//         console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
//         this.pokemonSelected = pokemon;
//       } else {
//         console.log(`Vous avez demandé un pokémon qui n'existe pas`);
//         this.pokemonSelected = pokemon;
//       }
//       //1 console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`); on récupère la proprièté .name grâce à l'objet Pokemon
//       //2 console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);  dans cette prpriété list on récupère les pokémons par leur index
//       //3 console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[id].name}`);  dans cette propriété list on récupère les pokémons pour leur identifiant
//       //4 console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`); on récupère le pokemon qu'on a trouvé et on affiche son nom
//   }
// }
 