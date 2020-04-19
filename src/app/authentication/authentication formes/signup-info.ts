export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor(name: string, username: string, email: string,roles:string[], password: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.role=roles;
        this.password = password;
    }
}
