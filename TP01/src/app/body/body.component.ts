import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  proprietaireID = 1;
  isDoNotDisturbe = true;

  argent = 45588;

  user = {
    prenom: 'Tony',
    nom: 'ALI',
    adresse: '32 Avenue du Capitole, 31000 Toulouse'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
