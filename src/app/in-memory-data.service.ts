import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api'; 
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    //1 return { POKEMONS }; ne fonctionne pas car POKEMONS vient d'un autre fichier, du coup on doit le faire en 2 temps, on est obliger de la réassigner à pokemons et on retourne cette nouvelle constante pokemons avec la valeur POKEMONS 
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
