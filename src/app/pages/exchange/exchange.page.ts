import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLabel,IonNote,IonList,IonIcon,IonItem,
  IonText
 } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonMenuButton,IonButtons,IonLabel,IonNote,IonList,IonIcon,IonItem,IonText,RouterLink
  ]
})
export class ExchangePage implements OnInit {

  constructor() {
    addIcons({ chevronForward, listCircle });

   }
  ngOnInit() {
  }

}
