import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @ViewChild(NgForm) form!: NgForm;

  constructor(private messageService: MessageService) {}

  submit() {
    if (this.form?.invalid) {
      this.messageService.errorMessage('All fields are mandatory');
      return;
    }
    this.messageService.successMessage('Your message was send succesfully');
    this.form.reset();
  }
}
