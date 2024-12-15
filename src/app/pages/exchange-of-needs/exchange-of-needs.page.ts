import { ExchangeService } from 'src/app/services/exchange.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonList,IonCard,IonItem,IonCardHeader,IonCardContent,IonCardTitle,IonCardSubtitle,IonText,IonIcon,IonLabel,IonNote
 } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-of-needs',
  templateUrl: './exchange-of-needs.page.html',
  styleUrls: ['./exchange-of-needs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonList,IonCard,IonItem,IonCardHeader,IonCardContent,IonCardTitle,IonCardSubtitle,IonText,IonIcon,IonLabel,IonNote]
})
export class ExchangeOfNeedsPage implements OnInit {
  items!:any
  constructor(private exchangeService:ExchangeService,private router:Router) { }

  ngOnInit() {
    this.fetchExchanges()
    console.log(this.items);
    
  }
  async fetchExchanges() {
    try {
      this.items = await this.exchangeService.getAllNeeds();

    } catch (error) {
      console.error('Erreur lors du chargement des besoins :', error);
    }
  }
  goToChat(item:any)
  {
    this.router.navigate(['pages/exchange/chat', item.id]);

    
  }

}
