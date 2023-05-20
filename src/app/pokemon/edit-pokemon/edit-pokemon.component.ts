import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form> <!--dans le cas où j'ai un pokémon le template du formulaire va venir se placer ici à l'intérieur de ce composant EditPokemon en passant la propriété pokémon au template -->
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit{
 
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, //pour l'intégration du formulaire
    private pokemonService: PokemonService //pour l'intégration du formulaire
  ) {}

  ngOnInit() { //à l'initialisation de ce composant je vais récupérer le pokemonId qui vient de l'URL
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); //ce pokemonId sera un nombre et je le récupère depuis la route, à l'instant T.
    if (pokemonId) { //si il y a un pookemon à ce moment là 
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId); //on va attribuer à pokemon le résultat de la méthode getPokemonById() du pokemonService.
    } else {
      this.pokemon = undefined; //sinon le pookemon sera undefined
    }
  }
}
