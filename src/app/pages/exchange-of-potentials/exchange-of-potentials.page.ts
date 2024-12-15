import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-exchange-of-potentials',
  templateUrl: './exchange-of-potentials.page.html',
  styleUrls: ['./exchange-of-potentials.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExchangeOfPotentialsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
