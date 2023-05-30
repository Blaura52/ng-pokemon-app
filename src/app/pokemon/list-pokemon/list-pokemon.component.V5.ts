// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Pokemon } from '../pokemon';
// import { PokemonService } from '../pokemon.service';

// @Component({
//   selector: 'app-list-pokemon',
//   templateUrl: './list-pokemon.component.html',
// })
// export class ListPokemonComponent implements OnInit{
//   pokemonList: Pokemon[]; //2 = POKEMONS; on enlève cette variable pour la mettre dans un service pour mettre à jour plus facilement la source de la donnée (avec le service que getPokemonList() à changer 
//   //1 On type notre propriété pokemonList en disant que c'est un tableau de pokémons, l'utilisateur devra obligatoirement lui passer une liste de pokémons avec des identifiants, point de vie etc..

//   constructor(
//     private router: Router, //2 injection du service Router qui va nous permettre d'avoir accès au routeur
//     private pokemonService: PokemonService //instançation de mon nouveau service 
//     ) {} 
    
//   ngOnInit(): void {
//     this.pokemonList = this.pokemonService.getPokemonList(); //2 pour finaliser la centralisation de la donnée pokémon pour tout les composants
//   }

//   goToPokemon(pokemon: Pokemon) { //2 ma méthode sur laquelle est dirigé l'utilisateur quand on intercepte l'évènement (click) 
//     this.router.navigate(['/pokemon', pokemon.id]); //2 on fait appel au routeur dans notre méthode, pour accéder à sa propriété .navigate et en paramètres on a plus qu'à passer l'URL de redirection /pokemons pour revenir à la liste des pokèmonss
//   }

// }
