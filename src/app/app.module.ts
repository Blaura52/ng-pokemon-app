import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';//import de PageNotFoundComponent et création du Dossier page-not-found avec 1 fichiers page-not-found.component.ts fait automatiquement par Angular CLI grace a la ligne de commande : ng generate component page-not-found. Je n'ai pas ajouté --inline-template=false à la fin de la ligne de commande car je ne voulais pas un fichier .ts et un .html, il n'y a pas besoin que le template soin à part
import { PokemonModule } from './pokemon/pokemon.module';
@NgModule({
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule //faire attention que ce module soit chargé en dernier car il contient les routes globales et si jamais les routes globales sont chargées avant les spécifiques, on tombera uniquement sur la page d'erreur 404
  ],
  declarations: [
    AppComponent, 
    PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
