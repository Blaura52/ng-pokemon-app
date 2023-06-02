// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Pokemon } from '../pokemon';
// import { PokemonService } from '../pokemon.service';

// @Component({
//   selector: 'app-list-pokemon',
//   templateUrl: './list-pokemon.component.html',
// })
// export class ListPokemonComponent implements OnInit{
//   pokemonList: Pokemon[];

//   constructor(
//     private router: Router,
//     private pokemonService: PokemonService
//     ) {} 
    
//   ngOnInit(): void {
//     //1 this.pokemonList = this.pokemonService.getPokemonList();
//     this.pokemonService.getPokemonList()//1 on récupérait avec la liste des pokémon de manière synchrone mais en rajoutant les requêtes Http avec les données qu'on va chercher dans une API, on fonctionne maintenant de manière asynchrone, du coup on reart de pokemonService, on va sur notre pokemonList et on lui passe la méthode ;subscribe qui nous permet de nous abonner à l'Observable this.pokemonService.getPokemonList().
//     .subscribe(pokemonList => this.pokemonList = pokemonList);//1 subscrite permet de s'abonner à l'Observable this.pokemonService.getPokemonList(). Ce flux de données va faire une requête réseau et me retourner la liste des pokémons. On s'bonne à ce service et on va recevoir pokemonList. Et avec cette pokemonList quand je l'aurai reçue, je pourrai l'attribeur à ma propriété pokemonList.
//   }

//   goToPokemon(pokemon: Pokemon) { 
//     this.router.navigate(['/pokemon', pokemon.id]);
//   }

// }
