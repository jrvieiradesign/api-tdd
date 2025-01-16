import Employee from "../domain/Employee";
import EmployeeRepository from "../infra/repository/EmployeeRepository";

export default class CreateEmployee {

    constructor(readonly employeeRepository: EmployeeRepository) {
    }

    async execute(input: any) {
        const employee = new Employee(input.employeeId, input.name, input.email, input. position, input.salary)

        await this.employeeRepository.saveEmployee(employee)

    }
}