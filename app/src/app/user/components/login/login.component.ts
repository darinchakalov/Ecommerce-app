import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild(NgForm) form!: NgForm;

  constructor(
    private userService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login(): void {
    if (this.form?.invalid) {
      this.messageService.errorMessage('All fields are mandatory');
      return;
    }
    this.userService.login(this.form.value).subscribe({
      next: () => {
        this.messageService.successMessage('Login successfull!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.messageService.errorMessage(err.error.message);
      },
    });
  }
}
