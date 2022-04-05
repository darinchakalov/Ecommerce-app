import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild(NgForm) form!: NgForm;

  pass: HTMLInputElement | undefined

  constructor(private userService: AuthService, private router: Router) {}

  register() {
    this.userService.register(this.form?.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.message}`,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    });
  }
}
