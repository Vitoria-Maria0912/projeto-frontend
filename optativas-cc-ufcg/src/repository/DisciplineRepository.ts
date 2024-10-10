import { PrismaClient } from "@prisma/client";
import { Discipline } from "../model/Discipline";

export class DisciplineRepository implements DisciplineRepositoryInterface {

    private prisma: PrismaClient = new PrismaClient();

    async createDiscipline(discipline: Discipline): Promise<Discipline> {
        return await this.prisma.discipline.create({data: discipline})
    }

    async deleteDiscipline(idDiscipline: number): Promise<void> {
        await this.prisma.discipline.delete({where: {id: idDiscipline}})
    }

    async updateDiscipline(discipline: Discipline): Promise<void> {
        await this.prisma.discipline.update({where: {id: discipline.id}, data: discipline});
    }
    
    async getOneDiscipline(idDiscipline: number): Promise<Discipline> {
        return await this.prisma.discipline.findUnique({where: {id: idDiscipline}})
    }

    async getAllDisciplines(): Promise<Discipline[]> {
        return await this.prisma.discipline.findMany()
    }
}

export interface DisciplineRepositoryInterface {
    createDiscipline(discipline:  Discipline): Promise<Discipline>;
    deleteDiscipline(idDiscipline:  number): Promise<void>;
    updateDiscipline(disciplineDTO:  Discipline): Promise<void>;
    getOneDiscipline(idDiscipline: number): Promise<Discipline>;
    getAllDisciplines(): Promise<Discipline[]>;
} 