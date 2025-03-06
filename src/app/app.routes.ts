import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.page';
import { HomePageComponent } from './pages/home/home.page';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent }
];
