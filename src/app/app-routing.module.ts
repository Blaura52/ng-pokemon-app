import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Angular lit les routes de heut en bas donc toujours mettre les routes les plus spécifiques au début en haut et les plus globales à la fin en bas. Si par contre il y a l'opérateur ** en chemin de route, il sera LE DERNIER par mesure de prudence, voir commentaire sur sa déclaration de route plus bas
const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent }, //route vers la liste des pokémons
  { path: 'pokemon/:id', component: DetailPokemonComponent }, //route vers la fiche détail du pokémon, c'est pour ça qu'on lui passe une propriété apres le /pokemon/ qui est de type identifiant pour pouvoir récuper le bon pokémon avec le bon identifant
  { path: '', redirectTo: 'pokemons', pathMatch:'full' }, //route par défaut pour le 1er chargement de l'appli, pour que ça redirige dessuite vers la liste des pokémons d'où le RedirectTo puis le chemin et le PathMatch évité des effets de bord entre nos routes, permet de mieux isoler les choses en gros
  { path: '**', component: PageNotFoundComponent} //On déclare une route qui grâce auà son chemin qui se trouve être l'opérateur doule étoile **, elle permet d'intercepter toutes les routes. Par prudence toujours le déclarer en dernier. Car si il se retrouve en premier comme Angular lit ces routes de haut en bas, toutes les pages aurait le message d'erreur page not found 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
