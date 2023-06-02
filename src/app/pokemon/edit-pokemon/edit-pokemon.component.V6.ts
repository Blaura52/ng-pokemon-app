// import { Component, OnInit } from '@angular/core';
// import { Pokemon } from '../pokemon';
// import { ActivatedRoute } from '@angular/router';
// import { PokemonService } from '../pokemon.service';

// @Component({
//   selector: 'app-edit-pokemon',
//   template: `
//     <h2 class="center">Editer {{ pokemon?.name}}</h2>
//     <p *ngIf="pokemon" class="center">
//       <img [src]="pokemon.picture">
//     </p>
//   <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form> <!--1 dans le cas où j'ai un pokémon le template du formulaire va venir se placer ici à l'intérieur de ce composant EditPokemon en passant la propriété pokémon au template -->
//   `,
//   styles: [
//   ]
// })
// export class EditPokemonComponent implements OnInit{
 
//   pokemon: Pokemon|undefined;

//   constructor(
//     private route: ActivatedRoute, //1 pour l'intégration du formulaire
//     private pokemonService: PokemonService //1 pour l'intégration du formulaire
//   ) {}

//   ngOnInit() { //1 à l'initialisation de ce composant je vais récupérer le pokemonId qui vient de l'URL
//     const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); //1 ce pokemonId sera un nombre et je le récupère depuis la route, à l'instant T.
//     if (pokemonId) { //1 si il y a un pookemon à ce moment là 
//       //2 this.pokemon = this.pokemonService.getPokemonById(+pokemonId); //on va attribuer à pokemon le résultat de la méthode getPokemonById() du pokemonService.
//       this.pokemonService.getPokemonById(+pokemonId) //2 on ne peut plus passeer par this.pokemon car maintenant nos données sont sur l'API, je travaille en données asynchrone, en flux(Observable), avec des requêtes Http c'est pour àa que je passe maintenant par this.pokemonService et après getPokemonById(+pokemonId) pour me passer le pokémon demané avec son bon identifiant 
//         .subscribe(pokemon => this.pokemon = pokemon); //2 je m'abonne, je récupère un pokémon en paramètre et ça je vais pouvoir l'affecter à ma propriété this.pokemon
//     } else {
//       this.pokemon = undefined; //1  sinon le pookemon sera undefined
//     }
//   }
// }
