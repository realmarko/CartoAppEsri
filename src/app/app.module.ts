import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewFormComponent } from './components/new-form/new-form.component';
import { FormsModule } from '@angular/forms';
import { FormNewPropertyComponent } from './components/form-new-property/form-new-property.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AddUserComponent } from './auth/add-user/add-user.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { AuthenticationService } from './_services/authentication.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './_services/alert.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'signup', component: SignupComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    EsriMapComponent,
    MainNavComponent,
    FormNewPropertyComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AddUserComponent,
    EditUserComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    routing
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AuthenticationService, AlertService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
