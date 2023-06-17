import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit{

  // {..."a..".."ab"..."abz".."abc"......},
  searchTerms = new Subject<string>();// la classe Subject vient de la librairie RxJS, c'est une classe particulière qui va nous permettre des tocker les recherches successives de l'utilisateur qui le réalise dans le champ de recherche, dans un tableau de chaine de caractère. Pour obtenir un flux de données dans le temps des recherches de l'utilisateur. 
  // Subject se comporte comme un Observable à la différence près qu'on peut le consommer contairement aux Observables. On ne peut que subscribe sur un Observable pour recevoir des données dans le temps. Utiliser Subject va nous permettre de construire un flux de données et pas seulement de le consommer mais de construire ce flux de données car ensuite à partir des ces données qui arrivent dans le temps on va vouloir afficher les résultats qui correspondent en miroir. 
  // On veut la pokemonList qui correspond à a : {...pokemonList...} et ensuite la pokemonList correspondant à ab : {...pokemonList(a)...pokemonList(ab)...}
  pokemons$: Observable<Pokemon[]>; //la variable pokemons$ est un Observable et il retourne un flux de tableaux de Pokemon 

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"...."abc"......}
      debounceTime(300), //Ce 1er opérateur permet d'éliminer les recherches qui n'ont pas au moins un certain nombre de millisecondes d'attente après, ici 300. Les termes de recherches trop sucsints vont être supprimés. RxJS va construire un nouveau flux de termes de recherches qui correspont mieux à ce que veut l'utilistaeur, pour supprimer les fautes de frappes, quand l'utilisateur tape "abz" par exemple et 100ms juste après "ab", il a supprimé le "z" dans sa rechercher car il s'est trompé, donc on ne vas pas lancer une rquête et encombrer le serveur pour ça, cette faute de frappe. 
      //{......"ab"...."ab"...."abc"......}
      distinctUntilChanged(), // Ce 2nd opérateur attend qu'il y ai un changement dans les termes de recherches. Ici par exemple on commence avec "ab", on va le garder, ensuite j'ai de nouveau "ab", donc il n'y a pas de changements et ensuite "abc" donc là j'ai une nouvelle recherche à effectuer. RxJS prendra en compte que la 1ere donnée "ab" et la dernière "abc" car la 2sn "ab" est la même que la 1ere "ab", donc il supprimera la 2nd requête car on ne va pas envoyer au serveur 2 fois la même requête à 400ms d'intervalle.
      //{......"ab".........."abc"......}
      //2 map((term) => this.pokemonService.searchPokemonList(term)) // On va utiliser l'opérateur mpa() pour transormer un terme de recherche en résultat de ma méthode this.pokemonService.searchPokemonList() qui reçoit un terme de recherche. Mais il y a un problème car l'opérateur map() va transformer "ab" en un Oservable de par searchPokemonList qui renvoit un flux de donnéesqui va contenir un tableau de Pokemon, alors qu'on ne veut pas un Observable avec des résultats de la recherche "ab" dedans, nous on veut juste les résultats des pokémons qui sont à l'intérieur de l'Observable.
      // {.....Observable<"ab">...........Observable<"abc">.......} // Pour récupérer notre tableau de Pokemon qui est bloqué à l'intérieur de l'Observable on à la possibilité de se servir de 3 opérateurs :
      // concatMap / mergeMap / SwitchMap
      // on choisi SwitchMap (comme dans une majorité des cas) qui nous permet que à chaque fois que l'utilisateur va lancer une nouvelle recherche, nous (RxJS) allons annuler la dernière recherche si elle est déjà en cours et venir effectuer uniquement la recherche la plus récente que l'utilsateur pourra demander.  
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      );
  }

  search(term: string) { //méthode search qui va prendre en paramètre un terme et elle est chargée de renvoyer les termes de recherches demandés par l'utilisateur. On va obtenir un flux dans le temps des recherches de l'utilisateur
    this.searchTerms.next(term); //searchTerms nous permet de construire le flux de données et de pousser des données dans notre flux à chaque fois que l'utilisateur fait une recherche interne, on va prendre notre Subject dans searchTerms et on va venir utiliser next pour pousser le terme de recherche qu'il a tapé. next c'est un peu comme la méthode push pour un tableau, ou pour ajouter un nouvel élément à la fin du tableau, c'est exactement pareil mais avec un flux de données.
  }
  // search(term: HTMLElement) { 
  //   this.searchTerms.next(term); 
  //   term.setAttribute("disabled", "true");
  // }

  goToDetail(pokemon: Pokemon) { //méthode qui permet d'accéder à un pokémon de la barre de recherche
    const link = ['/pokemon', pokemon.id]; //on déclare notre lien pour notre redirection, avec l'id du pokémon cliqué dans la barre de recherche
    this.router.navigate(link); //on passe par le router d'Angular pour passer notre variable link qui a notre URL en propriété pour rediriger l'utilisateur. Quand l'utilisateur et tapera ab dans sa barre de recherche par exemple, tout les pokémons avec ab dans leur nom vont être listé et c'est là quand il choisi un pokémon et qu'il y clique dessus, qu'il est redirigé vers le détail de ce pokémon.
  }
}
