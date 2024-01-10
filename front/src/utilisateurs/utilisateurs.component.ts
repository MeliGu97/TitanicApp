import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateurs.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'titanic-utilisateurs',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.scss'
})
export class UtilisateursComponent  implements OnInit {
  utilisateurs: any = [];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(data => {
        this.utilisateurs = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}