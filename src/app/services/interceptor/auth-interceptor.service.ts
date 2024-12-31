import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(event => {
        const startTime = Date.now();
        if (event instanceof HttpResponse) {
          const endTime = Date.now();
          const responseTime = endTime - startTime;
          console.log(`Request to ${request.url} took ${responseTime}ms`);
        }
      })
    );
  }
}
