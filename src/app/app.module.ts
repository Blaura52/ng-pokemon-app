import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BorderCardDirective } from './border-card.directive'; //import de BorderCardDirective et création du fichier border-card.directive fait automatiquement par Angular CLI grace a la ligne de commande : ng generate directive border-card
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule,AppRoutingModule],
  declarations: [AppComponent,BorderCardDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
