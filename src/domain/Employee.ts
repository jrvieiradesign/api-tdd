import Email from "./Email";

export default class Employee {
    private email: Email;

    constructor(readonly employeeId: string, readonly name: string, email: string, readonly position: string, readonly salary: number) {
        this.email = new Email(email)
    }
}