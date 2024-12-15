import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http'; 
import { apiRoute } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NeedService {
  private apiUrl = apiRoute.baseUrl;

  constructor() {} 

  // GET request
  async getAll() {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await Http.get({
        url: `${this.apiUrl}/json/besoin/all`,
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
        url: `${this.apiUrl}/data`,
        headers: headers,
        data: data,
      });

      console.log('Response:', response.data);
      return JSON.parse(response.data);
    } catch (error) {
      console.error('Error during POST request', error);
    }
  }
}
