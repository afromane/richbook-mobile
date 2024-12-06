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
        path: 'chat',
        loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
