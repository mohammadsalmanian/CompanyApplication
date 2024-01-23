import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { DomainName } from "./PathTools";

export class CompanyInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myRequest = req.clone(
            {
                url:DomainName+req.url
                //headers : req.headers.append('test-header','myvalue')
            }
            );
        return next.handle(myRequest);
    }
    
}