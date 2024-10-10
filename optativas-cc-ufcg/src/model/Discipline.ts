export interface DisciplineInterface {
    id: number;
    name: string;
    frequency: Frequency;
    available: boolean;
    description: string;
    pre_requisites: string[];
    teacher: string;
    schedule: string;
}

export enum Frequency {
    ALWAYS, SOMETIMES
}

export class Discipline implements DisciplineInterface {

    constructor(
        private _id: number,
        private _name: string,
        private _frequency: Frequency,
        private _available: boolean,
        private _description: string,
        private _pre_requisites: string[],
        private _teacher: string,        
        private _schedule: string         
    ) { this.validate();}

    private validate() {

        const stringProperties = [
            { name: 'name', value: this.name },
            { name: 'description', value: this.description },
            { name: 'teacher', value: this.teacher },
            { name: 'schedule', value: this.schedule }
        ];

        if(!this._frequency) { throw new Error(`Frequency cannot be empty!`);}
        if(!this._available) { throw new Error(`If is available cannot be empty!`);}

        stringProperties.forEach(property => {
            if(!property.value || (typeof property.value === 'string' && property.value.trim() === '')) {
                throw new Error(`${property.name} cannot be empty!`);
            }
        });
    }

    get schedule(): string {
        return this._schedule;
    }
    set schedule(value: string) {
        this._schedule = value;
    }
    get teacher(): string {
        return this._teacher;
    }
    set teacher(value: string) {
        this._teacher = value;
    }
    get pre_requisites(): string[] {
        return this._pre_requisites;
    }
    set pre_requisites(value: string[]) {
        this._pre_requisites = value;
    }
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
    get available(): boolean {
        return this._available;
    }
    set available(value: boolean) {
        this._available = value;
    }
    get frequency(): Frequency {
        return this._frequency;
    }
    set frequency(value: Frequency) {
        this._frequency = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get id(): number {
        return this._id;
    }
}
