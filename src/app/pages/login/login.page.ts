import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login/login-form.component";

@Component({
    selector: 'cg-login-page',
    templateUrl: 'login.page.html',
    styleUrl: 'login.page.scss',
    imports: [LoginFormComponent]
})

export class LoginPageComponent {
    constructor() { }
}