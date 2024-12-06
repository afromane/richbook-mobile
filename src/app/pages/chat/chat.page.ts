import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonItem,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonItem,IonLabel]
})
export class ChatPage implements OnInit {

  currentUser: string = 'user1'; // Define the current user's ID or username
  messages = [
    { sender: 'user1', content: 'Hello! How are you today?' },
    { sender: 'user2', content: 'I\'m doing well, thank you! How about you?' },
    { sender: 'user1', content: 'I\'m great, thanks! Just wanted to check in about our meeting.' },
    { sender: 'user2', content: 'Sure, let’s discuss. What time works for you?' },
    { sender: 'user1', content: 'Hello! How are you today?' },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
