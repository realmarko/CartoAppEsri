import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //otherwise redirect at home
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);