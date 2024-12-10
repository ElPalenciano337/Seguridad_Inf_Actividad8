import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordService } from './services/password/password.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password: string = '';
  confirmPassword: string = '';

  constructor(private passwordService: PasswordService) { }

  register() {
    if (this.password === this.confirmPassword) {
      const hashedPassword = this.passwordService.generateHash(this.password);
      const encryptedPassword = this.passwordService.encryptPassword(hashedPassword);

      console.log('Contraseña cifrada y almacenada:', encryptedPassword);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
