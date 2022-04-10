import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MessageService } from '../services/message.service';

const API_URL = environment.API_URL;

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqStream$ = next.handle(request);

    if (request.url.startsWith('/api')) {
      reqStream$ = next.handle(
        request.clone({
          url: request.url.replace('/api', API_URL),
          withCredentials: true,
        })
      );
    }
    return reqStream$.pipe(
      catchError((err) => {
        console.log(err.error.message);
        if (err.error.message != 'Invalid token!') {
          this.messageService.errorMessage(err.error.message);
        }
        throw new Error(err);
      })
    );
  }
}

export const httpInterceptorHandler: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MyHttpInterceptor,
  multi: true,
};
