import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';// RxJS 6

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn: boolean = false;// L'utilisateur est-il connecté ?
  redirectUr: string;// où rediriger l'utilisateur après l'authentification ?
  
  // Une méthode de connexion
  login(name: string, password: string): Observable<boolean> {
    // Faire notre appel à un service d'authentification...
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  // Une méthode de déconnexion
  logout() {
    this.isLoggedIn = false;
  }
}
