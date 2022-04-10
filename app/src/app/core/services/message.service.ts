import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  errorMessage(message: string) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${message}`,
    });
  }

  successMessage(message: string) {
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  animatedMessage(message: string) {
    return Swal.fire({
      title: `${message}`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }

  confirmMessage(message: string, question: string, confirm: string) {
    
  }
}
