import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewFormComponent } from './components/new-form/new-form.component';
import { FormsModule } from '@angular/forms';
import { FormNewPropertyComponent } from './components/form-new-property/form-new-property.component';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AddUserComponent } from './auth/add-user/add-user.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { AuthenticationService } from './services/authentication.service';
import { AlertComponent } from './alert/alert.component';

const appRoutes: Routes = [
  { path: '', component: SignupComponent },
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
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
