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
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonList,
  IonItem,
  IonRadio,
  IonLabel,
  IonButtons,
  IonModal,
  IonText,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonModal,
    IonButtons,
    IonLabel,
    IonRadio,
    IonItem,
    IonList,
    IonGrid,
    IonButton,
    IonContent,
    IonHeader, 
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegisterPage implements OnInit {
  form!: FormGroup;
  constructor(
    private router: Router,
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.onForm();
  }

  onForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      passwordConfirmation: new FormControl('', []),
      gender: new FormControl('', []),
    });
  }

  gotoLogin() {
    this.router.navigate(['login']);
  }

  async submit() {
    if (this.form.valid) {
      // alert('col')
      const {
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
        gender,
      } = this.form.value;

      // Simple password match validation
      if (password !== passwordConfirmation) {
        alert('Passwords do not match!');
        return;
      }

      const success = await this.databaseService.addUser(
        firstName,
        lastName,
        email,
        password,
        gender
      );
      console.log(success)
      if (success) {
        alert('Registration successful!');
        // Navigate to login or next steps
      } else {
        alert('Registration failed. Please try again.');
       
      }
    }
    else{
      alert('Form not valid ');

    }
  }

  async register() {}
}
