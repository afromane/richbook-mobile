import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonActionSheet,IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { storefrontOutline,  personOutline,  swapHorizontalOutline,  chatbubblesOutline,  homeOutline} from 'ionicons/icons';
@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,RouterLink,CommonModule,RouterLinkActive,
    IonActionSheet,IonButton
  ],
})
export class BottomNavBarComponent implements OnInit {
  // tabItems!: any;
  actionSheetExchange!:any
  actionSheetMarket!:any
  constructor(private router:Router) {
    addIcons({ personOutline, storefrontOutline, swapHorizontalOutline,chatbubblesOutline,homeOutline });
  }

  ngOnInit() {
    // this.initBottomItems()
    this.initializeActionSheet()
  }
  initializeActionSheet(){
    this.actionSheetExchange = [
      {
        text: 'Exchange of Potential',
        data: {
          action: 'potential',
        },
        handler: () => this.router.navigate(['pages/exchange/potentials'])
      },
      {
        text: 'Exchange of Needs',
        data: {
          action: 'needs',
        },
        handler: () => this.router.navigate(['pages/exchange/needs'])
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];

    this.actionSheetMarket = [
      {
        text: 'Market of Potential',
        data: {
          action: 'potential',
        },
        handler: () => this.router.navigate(['pages/market/potentials'])
      },
      {
        text: 'Market of Needs',
        data: {
          action: 'needs',
        },
        handler: () => this.router.navigate(['pages/market/needs'])
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];
  }
 

  // initBottomItems() {
  //   this.tabItems = [
  //     {
  //       title: 'Home',
  //       icon: 'home-outline',
  //       url: '/home',
  //     },
  //     {
  //       title: 'Market',
  //       icon: 'storefront-outline',
  //       url: '/home',
  //     },
  //     {
  //       title: 'Chat',
  //       icon: 'chatbubbles-outline',
  //       url: '/pages/exchange',
  //     },
  //     {
  //       title: 'Me',
  //       icon: 'person-outline',
  //       url: '/home',
  //     },
  //   ];
  
  // }
  private navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
