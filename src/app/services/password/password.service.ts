import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private salt: string = 'random_salt_value';

  private workFactor: number = 10000;

  generateHash(password: string): string {
    const saltedPassword = password + this.salt;
    return CryptoJS.SHA256(saltedPassword).toString(CryptoJS.enc.Base64);
  }

  encryptPassword(password: string): string {
    const cipherText = CryptoJS.AES.encrypt(password, 'your_secret_key').toString();
    return cipherText;
  }

  verifyPassword(storedHash: string, inputPassword: string): boolean {
    const generatedHash = this.generateHash(inputPassword);
    return storedHash === generatedHash;
  }
}