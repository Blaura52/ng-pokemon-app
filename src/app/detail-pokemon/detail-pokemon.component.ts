import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //1 import d'ActivatedRoute d'Angular pour avoir accès à la route courante
import { POKEMONS } from '../mock-pokemon-list'; //2 pour pourvoir accès à mes pokémons dans ma liste de pokémons
import { Pokemon } from '../pokemon'; //2 pour avoir accès à ma liste de pokémons

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[]; //2 on définit une variable avec une liste de pokémons
  pokemon: Pokemon | undefined; //2 pokemon est le pokémon courant qui correspond au Pokemon qui a été demandé par l'utilisateur via l'URL en identifiant. on a une propriété qui contient le pokemon (courant) à afficher à l'utilisateur

  constructor(private route: ActivatedRoute, private router: Router) {} //1 injection du service ActivatedRoute qui viens de l'import {ActivatedRoute} d'angular/router pour avoir accès à la route courante
                                                                        //3 injection du service Router qui va nous permettre d'avoir accès au routeur

  ngOnInit(): void {
    this.pokemonList = POKEMONS; //2 la propriété pokemonList sera un object de type POKEMONS, ça y est on peut accéder à nos pokémons dans notre liste pokémons
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); //1 on déclare une constante pokemonId qui sera un nombre si le pokémon existe sinon elle sera null. On va aussi faire appel au routeur .router pour récupérer cet id; .snapshot permet d'avoir la donnée à l'instant T et des paramètres qui sont transmis sous forme de .paramMap
    if (pokemonId) { // on attribut à la propriété pokemonId, le pokemon qui lui correspond
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId) //2 pour récupérer le pokemon courant dans la liste de POKEMONS qui correspond au Pokemon demandé par l'URL
    } // else {
      //   this.pokemon = undefined;
      // }   //cela ne sers à rien de le réinitialiser car si le pokemonId n'a pas été trouvé, le pokemon vaut déja undefined par défaut 
  }

  goToPokemonList() { //ma méthode sur laquelle est dirigé l'utilisateur quand on intercepte l'évènement (click) 
    this.router.navigate(['/pokemons']); //on fait appel au routeur dans notre méthode, pour accéder à sa propriété .navigate et en paramètres on a plus qu'à passer l'URL de redirection /pokemons pour revenir à la liste des pokèmonss
  }
}
