import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomNavBarComponent } from '../components/bottom-nav-bar/bottom-nav-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'pages',
    component :BottomNavBarComponent,
    children :[
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'exchange',
        loadComponent: () => import('./exchange/exchange.page').then( m => m.ExchangePage)
      },
      
      {
        path: 'exchange',
        children :[
          {
            path: 'chat/:id',
            loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
          },
          {
            path: 'needs',
            loadComponent: () => import('./exchange-of-needs/exchange-of-needs.page').then( m => m.ExchangeOfNeedsPage)
          },
          {
            path: 'potentials',
            loadComponent: () => import('./exchange-of-potentials/exchange-of-potentials.page').then( m => m.ExchangeOfPotentialsPage)
          },
        ]
      },
      {
        path: 'market',
        children :[
          {
            path: 'needs',
            loadComponent: () => import('./market-of-needs/market-of-needs.page').then( m => m.MarketOfNeedsPage)
          },
          {
            path: 'potentials',
            loadComponent: () => import('./market-of-potentials/market-of-potentials.page').then( m => m.MarketOfPotentialsPage)
          },
        ]
      },

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
