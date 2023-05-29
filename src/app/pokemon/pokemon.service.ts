import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon'; 
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {} //2 on utilise la syntaxe d'injections de dépendances donc private http et on utilise le HttpClient en tant que tel

  //1 getPokemonList(): Pokemon[] {} //la fonction reçoit ici une liste de pokémons
  //1 return POKEMONS; //Ici on renvoyait une constante

  getPokemonList(): Observable<Pokemon[]> { //2 ici on ne reçcoit plus uns liste de pokémons mais un Observable, c'est à dire une donnée qui arrive dans le temps qui elle contient une liste de pokémons. 
                                            //2 C'est la subtilité entre synchrone et asynchrone, ici on ne retourne pas direct les pokémons parce qu'on ne les a pas à l'instant T.On retourne un flux qui contiendra les pokémons qui arriverons un tout petit peu plus tard dans le temps
    return this.http.get<Pokemon[]>('api/pokemons').pipe( //2 par défaut le Http Client d'angular renvoit des flux et on peut les typer.Donc on dit qu'on va faire une requête get pour récupérer les données et que cette requête va contenir un tableau de pokémons, ensuite en paramètre de la méthode get() on lui passe une URL vers notre API. 
                                                          //2 Une fois que la requête est effectuée, on utilise un opérateur .pipe pour définir ce qu'on veut faire en plus du traitement Et il y a 2 choses qu'on veut faire: loguer la réponse et intercepter les erreurs éventuelles.
                                                          //2 Une fois qu'on a fait ça, on pourra mettre à disposition cette objet quand les composants vont l'appeler et eux vont pouvoir subscribe pour récupérer les données contenues dans ce flux.
      //3 tap((pokemonList) => console.table(pokemonList)), //2 tap est l'équivalent d'un console.log() adapté à un Observable, il n'intervient pas sur la requête il peut venir simplement faire de petite opérations à chaque fois qu'il y a une nouvelle réponse qui est apportée.
                                                             //2 Une fois qu'on a la réponse on et qu'un utilisateur veut y accéder,à chaque fois on va loguer la réponse, la liste de pokémons et si il y a une erreur on passe à catchError()
      tap((response) => this.log(response)), //3 au lieu de regarder pokemon grâce à un console.table on regarde response grâce à la méthode log qui prends en paramètre response et retourne un console.table(response);.
      //4 catchError((error) => { //2 si il y a une erreur dans la réponse catchError() nous permet d'intercepter une erreur 
      //   console.log(error); //2 on affiche l'erreur
      //   return of([]); //2 et on retourne un tableau de pokémons vide pour éviter de faire crasher l'application avec quelque chose de null ou Undefined et être en mesure d'afficher un message correspondant à ce qui s'est passé 
      // })
      catchError((error) => this.handleError(error, [])) //4 catchError fait passer l'erreur qui a intercepté par son paramètre error à la méthode handleError qui prends en entrée soit une error soit un tableau vide pour renvoyer une valeur par défaut errorValue
    );
  }

  //2 getPokemonById(pokemonId: number): Pokemon|undefined {
  //   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  // }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      //3 tap((pokemon) => console.table(pokemon)),
      tap((response) => this.log(response)), //3 au lieu de regarder pokemon grâce à un console.table on regarde response grâce à la méthode log qui prends en paramètre response et affiche un console.table(response);.
      //4 catchError((error) => {
      //   console.log(error);
      //   return of(undefined); 
      // })
      catchError((error) => this.handleError(error, undefined)) //4 catchError fait passer l'erreur qu'il a intercepté par son paramètre error à la méthode handleError qui prends en entrée soit une error soit undefined pour renvoyer une valeur par défaut errorValue 
    );
  } 

  updatePokemon(pokemon: Pokemon): Observable<null> { //5 Observable<Pokemon|undefined> l'API rest dont on se sert ne renvoit pas Pokemon ou undefined mais null donc on va s'adater, récupérer null et travailler avec 
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),//5 tap est l'équivalent d'un console.log() adapté à un Observable, il n'intervient pas sur la requête il peut venir simplement faire de petite opérations à chaque fois qu'il y a une nouvelle réponse qui est apportée. Il transmet la reponse à la méthode log qui prends en paramètre response et affiche un console.table(response);.
      catchError((error) => this.handleError(error, null))//5 catchError fait passer l'erreur qu'il a intercepté par son paramètre error à la méthode handleError qui prends en entrée soit une error soit undefined, dans ce cas ci error, pour renvoyer une valeur par défaut null
      //5 catchError((error) => this.handleError(error, undefined)) l'API rest dont on se sert renvoie null donc on va travailler avec null
    ); 
  }

  deletePokemonById(pokemonId: number): Observable<null> { //6 on crée une méthode pour supprimer un pokémon appelée delatePokemonById qui prends en paramètre un pokemonId de type number (l'identification du pokemon) et en paramètre de sortie nous savons pas trop ce que nous aurons donc on mets un flux, un Observable null
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe( //6 dans notre retour sur ce pokemonId on utilise notre client Http, puis le verbe HTTP delete avec en URL, l'URL de l'API plus l'identifant du pokémon que l'utilisateur veut supprimer. Ensuite on appel pipe qui nous permet d'utiliser tap et catchError
      tap((response) => this.log(response)), //6 tap est l'équivalent d'un console.log() adapté à un Observable, il n'intervient pas sur la requête il peut venir simplement faire de petite opérations à chaque fois qu'il y a une nouvelle réponse qui est apportée. Il transmet la reponse à la méthode log qui prends en paramètre response et affiche un console.table(response);.
      catchError((error) => this.handleError(error, null))//6 catchError fait passer l'erreur qu'il a intercepté par son paramètre error à la méthode handleError qui prends en entrée soit une error soit undefined, dans ce cas ci error, pour renvoyer une valeur par défaut null
    );
  }
  //3 private log(response: Pokemon[]|Pokemon|undefined) { //pour factoriser la fin du code des 2 méthodes qui est similairement pareil  //mais obliger de mettre any car l'Oservable de ma méthode updatePokemon marquée une erreur résolue par cette solution
  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) { //3 la méthode handleError qui prends en paramètre une erreur de type Error à priori et un 2ème paramètre qui est la valeur par défaut errorValue qu'on type avec un tableau vide ou undefined pour être précis sinon c'étais typé avec any mais c'est moins précis
    console.error(error);
    return of(errorValue); //4 valeur par défaut qui est erroValue retournée par la méthode handleError. Le of du return permet de transformer une donnée simple  en un flus de donnée c'est à dire un Observable qui emet la donnée en paramètre 
                             //4 donc je crée un flux qui emet undefined et un flux qui emet un tableau vide toujours dans l'optique de ne pas casser l'interface derrière et d'avoir quelque chose de fluide.
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
