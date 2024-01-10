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
    const isAuthenticated = this.authService.auth(emailToMatch, passwordToMatch);
  
    // qu'est ce qui se passe ici PARDI
    if (isAuthenticated) {
      // Si les info sont ok, affiche ok
      // Par contre ici c'est ok ça s'affiche bien
      // this.router.navigate(['/page-membre']);
      this.openDialog('Bienvenue !');
      console.log("hola la compagnie tu peux venir") 
    } else {
      this.openDialog('Vous n\'êtes pas autorisé à accèder à la page');
      // utilisateur actualise la page de login
      this.router.navigate(['/login']);
      console.log("POPOPOP CEST PAS BON")
      
    }
  
    // Retourne l'état d'authentification
    return isAuthenticated; 
  }

    openDialog(message: string): void {
      this.dialog.open(PopupComponent, {
        width: '250px',
        data: { message: message },
      });
  }
}
