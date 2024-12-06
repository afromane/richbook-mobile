import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonButton,
  IonGrid,
  IonToast,
  IonInput,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonToast,
    IonGrid,
    IonButton,
    IonItem,
    IonList,
    IonContent,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  isToastOpen = false;

  constructor(private router: Router,private databaseService: DatabaseService) {}

  ngOnInit() {
    this.onForm();
  }

  onForm() {
    this.form = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  async submit() {
    this.router.navigate(['pages/home']);
   /* if (this.form.valid) {
      this.setOpen(true);
      this.router.navigate(['pages/home']);
      const { email, password } = this.form.value;

    const isLoggedIn = await this.databaseService.verifyCredentials(email, password);
    if (isLoggedIn) {
      // Store login data in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isLoggedIn', 'true');

      alert("Login successful!");
      this.router.navigate(['/home']); // Navigate to the home page or dashboard
    } else {
      alert("Login failed. Please check your email and password.");
    }
    }*/
  }

  
  gotoRegister() {
    this.router.navigate(['register']);
  }
}
