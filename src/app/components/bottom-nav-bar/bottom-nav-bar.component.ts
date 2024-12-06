import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { storefrontOutline,  personOutline,  swapHorizontalOutline,  chatbubblesOutline,  homeOutline} from 'ionicons/icons';
@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,RouterLink,CommonModule,RouterLinkActive,],
})
export class BottomNavBarComponent implements OnInit {
  tabItems!: any;
  constructor() {
    addIcons({ personOutline, storefrontOutline, swapHorizontalOutline,chatbubblesOutline,homeOutline });
  }

  ngOnInit() {
    this.initBottomItems()
  }

  initBottomItems() {
    this.tabItems = [
      {
        title: 'Home',
        icon: 'home-outline',
        url: '/home',
      },
      {
        title: 'Market',
        icon: 'storefront-outline',
        url: '/home',
      },
      {
        title: 'Chat',
        icon: 'chatbubbles-outline',
        url: '/pages/exchange',
      },
      {
        title: 'Me',
        icon: 'person-outline',
        url: '/home',
      },
    ];
  
  }
}
