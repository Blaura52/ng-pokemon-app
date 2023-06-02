import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon'; 
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {} 

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  } 

  searchPokemonList(term: string): Observable<Pokemon[]> { //méthode pour rechercher une liste de pokemons en fontion, grâce, avec un terme donné. Le terme que l'utilisateur a choisi sera le paramètre d'entrée de type string et en retour on aura un Observable qui va contenir un flux de tableaux de pokémons
    if (term.length <= 1) { //on filtre la longueur des termes de recherches, c'est à dire ici qu'on ne conserve que les termes de recherches où leur longueur est supérieur à 1
      return of([]); //sinon si le terme ne rentre pas dans les critères de longueur des termes de recherhes on renvoit à l'utilisateur un tableau blanc avec la méthode of() pour éviter de faire la méthode http juste en dessous
    } 
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe( //on effectue une requête sur une propriété de mon objet Pokemon donc on fait une requête sur le nom et ce qu'on va passer c'est le nom, c'est le terme de recherche entré par l'utilisateur
      tap((response) => this.log(response)), //on veut loguer la réponse dans un tableau
      catchError((error) => this.handleError(error, [])) // en cas d'erreur sur la recherche on renverra à l'utilisateur un tableau vide avec aucun pokémon
    )
  }
  
  updatePokemon(pokemon: Pokemon): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  ); 
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, null))
    )
  }

  deletePokemonById(pokemonId: number): Observable<null> { 
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe( 
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) { 
    console.error(error);
    return of(errorValue); 
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
}
}
