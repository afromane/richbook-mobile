import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButtons,
  IonButton,
  IonBadge,
  IonCard,
  IonLabel,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipseOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { NeedService } from 'src/app/services/need.service';
import { apiRoute } from 'src/environments/environment';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-market-of-needs',
  templateUrl: './market-of-needs.page.html',
  styleUrls: ['./market-of-needs.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBadge,
    IonCard,
    IonLabel,
    IonList,
    IonItem,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonModal,
    IonButton,
    CommonModule,
  ],
})
export class MarketOfNeedsPage implements OnInit {
  // items = [
  //   {
  //     title: 'Card 1',
  //     subtitle: 'Subtitle 1',
  //     imgSrc: '../../../assets/img/img1.png',
  //     description: 'This is card number 1.',
  //     status: 'pending',
  //     color: 'orange',
  //   },
  // ];
  needs: any;
  exchange: any;
  constructor(
    private router: Router,
    private needService: NeedService,
    private exchangeService: ExchangeService
  ) {
    addIcons({ ellipseOutline });
  }

  ngOnInit() {
    this.fetchNeeds();
  }

  isModalOpen = false;
  selectedItem: any = null;

  setOpen(item: any) {
    this.selectedItem = item;
    this.isModalOpen = true;
  }
  setClose() {
    this.isModalOpen = false;
  }
  async startExchange() {
    this.setClose();
    var data = {
      needId: this.selectedItem.id,
    };
    
    try {
      const response = await this.exchangeService.postData(data);
  
      this.router.navigate(['pages/exchange/chat', response.echangeId]);
    } catch (error) {
      console.error('Error starting exchange:', error);
    }
  }
  

  async fetchNeeds() {
    try {
      this.needs = await this.needService.getAll();
      this.needs = this.needs.map((need: any) => {
        if (need.img) {
          need.img = `${apiRoute.baseUrl + '/img/' + need.img}`;
        } else {
          need.img = '../../../assets/img/img1.png';
        }
        return need; // Retourner l'objet modifié
      });
    } catch (error) {
      console.error('Erreur lors du chargement des besoins :', error);
    }
  }
}
