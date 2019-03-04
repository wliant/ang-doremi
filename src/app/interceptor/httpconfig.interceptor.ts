import { Injectable } from '@angular/core';
//import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(public authenticationService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));

          if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.authdata}`
                    //Authorization: "Basic d2JhZG1pbjp3YmFkbWlu"
                }
            });
          }

          if (!request.headers.has('Content-Type')) {
              request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }

          request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

          console.log('Intercepted HTTP call', request);
          return next.handle(request).pipe(
              map((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                      console.log('event--->>>', event);
                  }
                  return event;
              }),
              catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // auto logout if 401 response returned from api
                    this.authenticationService.logout();
                    location.reload(true);
                }
                const err = error.error.message || error.statusText;
                return throwError(err);
              })
            );
      }
}
