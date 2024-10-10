import { DisciplineRepository, DisciplineRepositoryInterface } from "../repository/DisciplineRepository";
import { DisciplineDTO } from "../dtos/DisciplineDTO";
import { Discipline, Frequency } from "../model/Discipline";

type DisciplineUpdateFields = {
    [K in keyof Discipline]: Discipline[K] extends string | number | string[] ? Discipline[K] : never;
};

export class DisciplineService implements DisciplineServiceInterface {

    private disciplineRepository: DisciplineRepositoryInterface;

    constructor(disciplineRepository: DisciplineRepository) {
        this.disciplineRepository = disciplineRepository;
    }

    async createDiscipline(disciplineDTO: DisciplineDTO): Promise<DisciplineDTO> {
        const discipline: Discipline = new Discipline( disciplineDTO.id, 
                                                       disciplineDTO.name,
                                                       disciplineDTO.frequency, 
                                                       disciplineDTO.available, 
                                                       disciplineDTO.description,
                                                       disciplineDTO.pre_requisites, 
                                                       disciplineDTO.teacher,
                                                       disciplineDTO.schedule );
        
        return await this.disciplineRepository.createDiscipline(discipline);
    }

    async deleteDiscipline(idDiscipline: number): Promise<void> {
        await this.disciplineRepository.deleteDiscipline(idDiscipline);
    }

    async updateDiscipline(idDiscipline: number, disciplineDTO: DisciplineDTO): Promise<void> {
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline)            
        await this.disciplineRepository.updateDiscipline(discipline);
    }
    
    async patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void> {
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline);
        Object.assign(discipline, updates); 
        await this.disciplineRepository.updateDiscipline(discipline);
    }
    

    async getOneDiscipline(idDiscipline: number): Promise<DisciplineDTO> {
        return await this.disciplineRepository.getOneDiscipline(idDiscipline);
    }

    async getAllDisciplines(): Promise<DisciplineDTO[]> {
        return await this.disciplineRepository.getAllDisciplines();
    }
}

export interface DisciplineServiceInterface {
    createDiscipline(disciplineDTO:  DisciplineDTO): Promise<DisciplineDTO>;
    deleteDiscipline(idDiscipline: number): Promise<void>;
    patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void>;
    updateDiscipline(idDiscipline: number, disciplineDTO:  DisciplineDTO): Promise<void>;
    getOneDiscipline(idDiscipline: number): Promise<DisciplineDTO>;
    getAllDisciplines(): Promise<DisciplineDTO[]>;
} 

