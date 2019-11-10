import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
    token: string;
    signUser(email: string, password) {

    }
    logout() { }
    getToken() { return '';}
}