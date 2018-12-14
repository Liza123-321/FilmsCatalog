export class User {
    email: string;
    password: string;
    access_token: string;

    constructor(props) {
        Object.assign(this, props);
    }
}