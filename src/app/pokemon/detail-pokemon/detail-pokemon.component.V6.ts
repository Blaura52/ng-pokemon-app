// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Pokemon } from '../pokemon';
// import { PokemonService } from '../pokemon.service'; 
// @Component({
//   selector: 'app-detail-pokemon',
//   templateUrl: './detail-pokemon.component.html',
// })
// export class DetailPokemonComponent implements OnInit {
  
//   pokemonList: Pokemon[];
//   pokemon: Pokemon | undefined; 

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private pokemonService: PokemonService 
//     ) {} 

//   ngOnInit(): void {
//     const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
//     if (pokemonId) {
//       //1 this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
//       this.pokemonService.getPokemonById(+pokemonId) //2 on ne peut plus passeer par this.pokemon car maintenant nos données sont sur l'API, je travaille en données asynchrone, en flux(Observable), avec des requêtes Http c'est pour àa que je passe maintenant par this.pokemonService et après getPokemonById(+pokemonId) pour me passer le pokémon demané avec son bon identifiant 
//         .subscribe(pokemon => this.pokemon = pokemon); //2 je m'abonne, je récupère un pokémon en paramètre et ça je vais pouvoir l'affecter à ma propriété this.pokemon
//     } 
//   }

//   deletePokemon(pokemon: Pokemon) { 
//     this.pokemonService.deletePokemonById(pokemon.id) //3 quand l'utilisateur à cliqué sur le bouton Supprimer, j'appelle pokemonService et je lui dit de supprimer un pokemon avec comme identifiant  pokemon.id grâce à la méthode deletePokemonById
//     .subscribe(() => this.goToPokemonList()); //3 et on le redirige vers la page de la liste de tout les pokémons car le laisait sur une page de détail de pokémon qui n'existe plus ne veut rien dire
//   }

//   goToPokemonList() { 
//     this.router.navigate(['/pokemons']);
//   }

//   goToEditPokemon(pokemon: Pokemon) {
//     this.router.navigate(['/edit/pokemon', pokemon.id]);
//   }
// }
