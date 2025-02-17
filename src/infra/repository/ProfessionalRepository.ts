import pgp from "pg-promise";
import Professional from "../../domain/Professional";

export default interface ProfessionalRepository {
    saveProfessional(professional: Professional): Promise<void>
    updateProfessional(professional: Professional): Promise<void>
    getProfessional(professional: Professional): Promise<void>
}


export class ProfessionalRepositoryDatabase implements ProfessionalRepository {
    saveProfessional(professional: Professional): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateProfessional(professional: Professional): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getProfessional(professional: Professional): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}