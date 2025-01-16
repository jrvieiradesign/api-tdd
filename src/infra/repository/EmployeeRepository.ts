import pgp from "pg-promise";
import Employee from "../../domain/Employee";

export default interface  EmployeeRepository {
    saveEmployee(employee: Employee): Promise<void>
    updateEmployee(employee: Employee): Promise<void>
    getEmployee(employee: Employee): Promise<void>
}


export class EmployeeRepositoryDatabase implements EmployeeRepository {
    saveEmployee(employee: Employee): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateEmployee(employee: Employee): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getEmployee(employee: Employee): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}