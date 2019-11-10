import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

@NgModule({
    imports:[
        //ShareModule.
    //AppRoutingModule
],
exports:[
    //AppRoutingModule
//HeaderComponent
],
providers:[
    //DataStorageService,
    //AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
    ,{provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}

]
})
export class CoreModule{}