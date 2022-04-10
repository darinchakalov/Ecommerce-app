import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild(NgForm) form!: NgForm;

  constructor(
    private userService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  register() {
    if (this.form?.invalid) {
      this.messageService.errorMessage('All fields are mandatory');
      return;
    }
    this.userService.register(this.form?.value).subscribe({
      next: () => {
        this.messageService.successMessage('Successfull registration');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.messageService.errorMessage(err.error.message);
      },
    });
  }
}
