import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = environment.token;

        if (token) {
            request = request.clone({
                setHeaders: {
                    "Authorization": `Token ${token}`,
                    "content-language": "en",
                    "Content-Type": "application/json"
                }
            });
        }

        return next.handle(request);
    }
}
