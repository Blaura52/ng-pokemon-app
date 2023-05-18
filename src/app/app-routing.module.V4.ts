// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
// import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';

// const routes: Routes = [
//   { path: 'pokemons', component: ListPokemonComponent }, //route vers la liste des pokémons
//   { path: 'pokemon/:id', component: DetailPokemonComponent }, //route vers la fiche détail du pokémon, c'est pour ça qu'on lui passe une propriété apres le /pokemon/ qui est de type identifiant pour pouvoir récuper le bon pokémon avec le bon identifant
//   { path: '', redirectTo: 'pokemons', pathMatch:'full' } //route par défaut pour le 1er chargement de l'appli, pour que ça redirige dessuite vers la liste des pokémons d'où le RedirectTo puis le chemin et le PathMatch évité des effets de bord entre nos routes, permet de mieux isoler les choses en gros
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
