export class AuthModel {
    email: string;
    access_token: string;
    constructor(email: string, access_token: string) {
        this.email = email;
        this.access_token = access_token;
    }
}