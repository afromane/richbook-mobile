import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormControl, FormGroup, FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ExchangeService } from 'src/app/services/exchange.service';
import { addIcons } from 'ionicons';
import { sendOutline } from 'ionicons/icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
  ],
})
export class ChatPage implements OnInit {
  exchangeID: any;
  form!: FormGroup;
  currentUser: string = 'user1'; // Define the current user's ID or username
  // messages = [
  //   { sender: 'user1', content: 'Hello! How are you today?' },
  //   { sender: 'user2', content: "I'm doing well, thank you! How about you?" },
  //   {
  //     sender: 'user1',
  //     content: "I'm great, thanks! Just wanted to check in about our meeting.",
  //   },
  //   {
  //     sender: 'user2',
  //     content: 'Sure, let’s discuss. What time works for you?',
  //   },
  //   { sender: 'user1', content: 'Hello! How are you today?' },
  // ];
  messages!:any
  message: any;

  // messages = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private exchangeService: ExchangeService
  ) {
    addIcons({ sendOutline });
  }

  onForm() {
    this.form = new FormGroup({
      message: new FormControl('', []),
    });
  }
  ngOnInit() {
    // Access the 'id' parameter
    this.activatedRoute.params.subscribe((params) => {
      this.exchangeID = params['id'];
    this.fetchMessages(this.exchangeID);

    });
  }

  async fetchMessages(id: any) {
    try {
      const response = await this.exchangeService.getMessages(id);
      this.messages =  response.messages 
    } catch (error) {
      console.error('Error starting exchange:', error);
    }
    // console.log(this.messages);

  }
  async sendMessage() {
    if (this.message) {
      var data = {
        message: this.message,
        echangeId: this.exchangeID,
      };

      try {
        const response = await this.exchangeService.postMessage(data);
         this.fetchMessages(this.exchangeID);
        this.message = ''
      } catch (error) {
        console.error('Error starting exchange:', error);
      }
    }
  }
}
