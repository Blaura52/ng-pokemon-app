import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BorderCardDirective } from './border-card.directive'; //import de BorderCardDirective et création du fichier border-card.directive fait automatiquement par Angular CLI grace a la ligne de commande : ng generate directive border-card
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';//import de PokemonTypeColorPipe et création du fichier pokemon-type-color.pipe fait automatiquement par Angular CLI grace a la ligne de commande : ng generate pipe pokemon-type-color

@NgModule({
  imports: [BrowserModule,AppRoutingModule],
  declarations: [AppComponent,BorderCardDirective, PokemonTypeColorPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
