import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AppSnackbar {
  durationInSeconds: number = 2;

  constructor(private matSnackBar: MatSnackBar) {}

  openSnackBar_Err(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

  async openSnackBar_OK(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
    await this.delay(this.durationInSeconds * 1000);
  }

  openSuccessSnackBar() {
    this.matSnackBar.open('Login Successful', 'OK', {
      duration: 3000,
      panelClass: ['green-snackbar'],
    });
  }

  openFailureSnackBar() {
    this.matSnackBar.open('Invalid Login Credentials', 'Try again!', {
      panelClass: ['yellow-snackbar'],
    });
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
