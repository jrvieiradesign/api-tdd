import Company from "../domain/Company";
import CompanyRepository from "../infra/repository/CompanyRepository";

export default class CreateCompany {

    constructor(readonly companyRepository: CompanyRepository) {
    }

    async execute(input: Input) {
        const existsCnpj = await this.companyRepository.existsByCNPJ(input.cnpj);
        if (existsCnpj) {
          throw new Error("CNPJ já está cadastrado");
        }
        const company = new Company(input.companyId, input.name, input.cnpj, input.email, input.endereco)
        await this.companyRepository.saveCompany(company)
    }
}

interface Input {
  companyId: string,
  name: string,
  cnpj: string,
  email: string,
  endereco: string
}