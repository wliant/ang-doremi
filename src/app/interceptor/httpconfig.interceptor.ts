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

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  //constructor(public errorDialogService: ErrorDialogService) { }
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
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                //this.errorDialogService.openDialog(data);
                return throwError(error);
              })
            );
      }
}
