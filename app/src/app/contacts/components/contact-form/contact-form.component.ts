import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @ViewChild(NgForm) form!: NgForm;

  constructor() {}

  submit() {
    if (this.form?.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are mandatory',
      });
      return;
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your was send succesfully',
      showConfirmButton: false,
      timer: 1500,
    });
    this.form.reset();
  }
}
