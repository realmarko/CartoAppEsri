import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(localStorage.getItem('currentUser'))
        {
            //logged in so return true
            return true;
        }

        //not logged in so redirect to login page with the return url
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    }
}