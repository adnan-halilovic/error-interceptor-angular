import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log('Error Event');
          } else {
            switch (error.status) {
              case 401: // Unautorized
                this.toastr.error(`${error.statusText}`, 'Authorization Error');
                break;
              case 403: // Forbidden
                this.toastr.error(`${error.statusText}`, 'Access Error');
                break;
              case 404: // Not found
                this.toastr.error(`${error.statusText}`, 'Route Error');
                break;
              case 503: // Server error
                this.toastr.error(`${error.statusText}`, 'Server Error');
                break;
            }
          }
        } else {
          console.log('An error occurred');
        }
        return throwError(() => new Error(error.statusText));
      })
    );
  }
}
