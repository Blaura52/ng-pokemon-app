import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive'; //import de BorderCardDirective et création du fichier border-card.directive fait automatiquement par Angular CLI grace a la ligne de commande : ng generate directive border-card
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';//import de PokemonTypeColorPipe et création du fichier pokemon-type-color.pipe fait automatiquement par Angular CLI grace a la ligne de commande : ng generate pipe pokemon-type-color
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';//import de ListPokemonComponent et création du Dossier list-pokemon avec 2 fichiers list-pokemon.component, un .html, l'autre .ts fait automatiquement par Angular CLI grace a la ligne de commande : ng generate component list-pokemon --inline-template=false
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';//import de DetailPokemonComponent et création du Dossier detail-pokemon avec 2 fichiers detail-pokemon.component, un .html, l'autre .ts fait automatiquement par Angular CLI grace a la ligne de commande : ng generate component detail-pokemon --inline-template=false
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule],
  declarations: [
    AppComponent,
    BorderCardDirective, 
    PokemonTypeColorPipe, 
    ListPokemonComponent, 
    DetailPokemonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
