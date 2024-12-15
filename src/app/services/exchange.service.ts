import { Injectable } from '@angular/core';

import { Http } from '@capacitor-community/http'; 
import { apiRoute } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private apiUrl = apiRoute.baseUrl;

  constructor() {} 

  // GET request
  async getAllNeeds() {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await Http.get({
        url: `${this.apiUrl}/json/exchange/need`,
        headers: headers,
      });

      // console.log('Response:', response.data);
      return JSON.parse(response.data); // Parse the JSON response
    } catch (error) {
      console.error('Error during GET request', error);
    }
  }

  // POST request
  async postData(data: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await Http.post({
        url: `${this.apiUrl}/json/exchange/start`,
        headers: headers,
        data: data,
      });

      // console.log('Response:', response.data);
      return JSON.parse(response.data);
    } catch (error) {
      console.error('Error during POST request', error);
    }
  }
  async getMessages(data: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await Http.get({
        url: `${this.apiUrl}/json/exchange/messages/`+data,
        headers: headers,
      });

      return JSON.parse(response.data);
    } catch (error) {
      console.error('Error during GET request', error);
    }
  }
  async postMessage(data: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await Http.post({
        url: `${this.apiUrl}/json/message/send`,
        headers: headers,
        data: data,
      });

      // console.log('Response:', response.data);
      return JSON.parse(response.data);
    } catch (error) {
      console.error('Error during POST request', error);
    }
  }
}
