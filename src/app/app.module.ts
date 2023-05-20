import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,// pour l'injection des directives NgForm et NgModule pour les formulaires
    PokemonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
