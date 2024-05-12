export interface IDepartments {
    departments:Department[];
}

export interface Department {
    departmentId:number;
    displayName:string;
}

export class DummyDepartment implements Department {
    departmentId:number;
    displayName:string;

    constructor(departmentId:number,displayName:string) {
        this.departmentId = departmentId;
        this.displayName = displayName;
    }
}