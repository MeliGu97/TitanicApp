import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  canActivate(): boolean {
    if (this.authService.getIsAuthenticated()) {
      // this.openDialog('Bienvenue !');
      return true;
    } else {
      // this.openDialog('Vous n\'êtes pas autorisé à accéder à la page');
      // this.router.navigate(['/login']);
      return false;
    }
  }

  private openDialog(message: string): void {
    this.dialog.open(PopupComponent, {
      width: '250px',
      data: { message: message },
    });
  }
}
