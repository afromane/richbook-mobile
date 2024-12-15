import { Injectable } from '@angular/core';

import { Http } from '@capacitor-community/http'; // Correct import
import { apiRoute } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = apiRoute.baseUrl;

  constructor( ) {
  }

  async login(email: string, password: string) {
    var data = {email,password}
    console.log(data)
    
    try {
      const response: any = await Http.post({
        url: `${this.apiUrl+'/json/login'}`,
        data: data,
      });
  
      if (response && response.token) {
        // Store the JWT token in sessionStorage
        console.log(response)
        sessionStorage.setItem('jwt', response.token);
      }
  
      return response;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }
  

   getToken() {
    return sessionStorage.getItem('jwt');
  }

  async logout() {
     sessionStorage.clear();
  }
}