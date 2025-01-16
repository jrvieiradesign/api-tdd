import pgp from "pg-promise"
import Company from "../../domain/Company"

export default interface CompanyRepository {
    saveCompany(company: Company): Promise<void>;
    updateCompany(company: Company): Promise<void>;
    getCompany(company: Company): Promise<void>;
    existsByCNPJ(cnpj: string): Promise<any>;
}

export class CompanyRepositoryDatabase implements CompanyRepository {
    async existsByCNPJ(cnpj: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getCompany(company: Company): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async updateCompany(company: Company): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async saveCompany(company: Company): Promise<void> {
        const connection = pgp()("postgres://zaqueu:COMPANYACESS@localhost:5432/app");
        const companies = await connection.query("insert into ***** (company_id, name, email, cnpj, endereco) values ($1, $2, $3, $4, $5)", [company.companyId, company.name, company.cnpj, company.email, company.endereco]);
    }
    
}
