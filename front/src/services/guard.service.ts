import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog // Pour la popup
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Ici def des valeurs e-mail et mdp à comparer
    const emailToMatch = 'toto@test.fr';
    const passwordToMatch = 'toto';
  
    // Vérif de l'auth
    const isAuth = this.authService.auth(emailToMatch, passwordToMatch);
  
    // Si l'utilisateur n'est pas authentifié 
    // bon finalement ne sert pas a grand chose car affihce le errorMessage de login component
    if (!isAuth) {
      this.openDialog('Pas autorisé');
      // utilisateur actualise la page de login
      this.router.navigate(['/login']);
    } else {
      // Si les info sont ok, affiche ok
      // Par contre ici c'est ok ça s'affiche bien
      this.openDialog('Vous pouvez entrer toto. Bienvenue !');
    }
  
    // Retourne l'état d'authentification
    return isAuth; 
  }

    openDialog(message: string): void {
      this.dialog.open(PopupComponent, {
        width: '250px',
        data: { message: message },
      });
  }
}
