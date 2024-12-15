import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'exchange',
    loadComponent: () => import('./pages/exchange/exchange.page').then( m => m.ExchangePage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'exchange-of-needs',
    loadComponent: () => import('./pages/exchange-of-needs/exchange-of-needs.page').then( m => m.ExchangeOfNeedsPage)
  },
  {
    path: 'exchange-of-potentials',
    loadComponent: () => import('./pages/exchange-of-potentials/exchange-of-potentials.page').then( m => m.ExchangeOfPotentialsPage)
  },
  {
    path: 'market-of-needs',
    loadComponent: () => import('./pages/market-of-needs/market-of-needs.page').then( m => m.MarketOfNeedsPage)
  },
  {
    path: 'market-of-potentials',
    loadComponent: () => import('./pages/market-of-potentials/market-of-potentials.page').then( m => m.MarketOfPotentialsPage)
  },
  
  
];
