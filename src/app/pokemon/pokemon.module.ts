import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

// Angular lit les routes de heut en bas donc toujours mettre les routes les plus spécifiques au début en haut et les plus globales à la fin en bas. Si par contre il y a l'opérateur ** en chemin de route, il sera LE DERNIER par mesure de prudence, voir commentaire sur sa déclaration de route plus bas
const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent }, //route vers la liste des pokémons
  { path: 'pokemon/:id', component: DetailPokemonComponent }, //route vers la fiche détail du pokémon, c'est pour ça qu'on lui passe une propriété apres le /pokemon/ qui est de type identifiant pour pouvoir récuper le bon pokémon avec le bon identifant
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes) //je me sers du routeur Angular, je lui ajoute des routes grâce à .forChild, mes routes passeront dedans
  ],
  providers:[PokemonService] //ajout de ce providers pour cnetraliser le pokemon service dans le pokemon service et arreter d'utiliser l'injecteur racine
})
export class PokemonModule { }
 