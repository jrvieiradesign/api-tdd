import Email from "./Email";

export default class Company {
    private email: Email;

    constructor(readonly companyId: string, readonly name: string,
        readonly cnpj: string,
        email: string,
        readonly endereco: string) {
        this.email = new Email(email)
        if (!name || name.trim().length === 0) throw new Error("O nome é obrigatório");
        if (!endereco || endereco.trim().length === 0) throw new Error("O endereco é obrigatório");
        if (!this.isValidCNPJ(cnpj)) throw new Error("CNPJ inválido");
    }

    getEmail () {
        return this.email.getValue()
    }
    
    private isValidCNPJ(cnpj: string): boolean {
        const cnpjRegex = /^\d{14}$/;
        return cnpjRegex.test(cnpj);
    }
}