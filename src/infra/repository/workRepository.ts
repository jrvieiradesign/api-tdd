export default interface WorkRepository {
    saveWork(work: any) : Promise<void>
    updateWork(work: any) : Promise<void>
    getWork(work: any) : Promise<void>
}

export class WorkRepositoryDatabase implements WorkRepository {
    saveWork(work: any): Promise<void> {
        throw new Error("Method not implemented.")
    }
    updateWork(work: any): Promise<void> {
        throw new Error("Method not implemented.")
    }
    getWork(work: any): Promise<void> {
        throw new Error("Method not implemented.")
    }
    
}