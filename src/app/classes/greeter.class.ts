import { User } from "../interfaces/user.interface";
import { InjectionToken } from "@angular/core";

export class Greeter implements User {
    firstName: string;
    lastName: string;

    constructor(user: User) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

}

export const GREETER = new InjectionToken('Greeter', {
    providedIn: 'root',
    factory: () => Greeter
})