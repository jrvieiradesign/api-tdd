import Company from "../domain/Company";
import CompanyRepository from "../infra/repository/CompanyRepository";

export default class createCompany {

    constructor(readonly companyRepository: CompanyRepository) {
    }

    async execute(input: any) {
        const company = new Company(input.companyId, input.name, input.cnpj, input.email, input.endereco)
        await this.companyRepository.saveCompany(company)
    }
}