import { MainGroupsModel } from './groupsmodel';
import { MainTeachersModel } from './teachersmodel';
import { MainLMSModel } from './LMSModel';

interface grade {
   level: number;
   id: number;
   records: recordsSchema[];
}

interface recordsSchema {
   pupilId?: number,
   teacherId: number,
   subjectId: number,
   lesson: number,
   mark: number
}

export class MainGradeBooksModel {
    grades: Map<number, grade>;
    groups: MainGroupsModel;
    teachers: MainTeachersModel;
    lms: MainLMSModel;
    constructor(groups: MainGroupsModel, teachers: MainTeachersModel, lms: MainLMSModel) {
        this.grades = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(level: number, gradeId: number) {
        let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
        this.grades.set(gradeId, { level, id, records: [] })
        return id;
    }

    clear() {
        if (arguments.length > 0) {
            throw new Error("some Error");
        } else {
            this.grades.clear();
        }
    }

    addRecord(gradebookId: number, record: recordsSchema) {
        const grade = this.grades.get(gradebookId);
        if (grade) {
            grade.records.push(record);
        } else {
            throw new Error("error");
        }
    }

    read(gradebookId: number, pupilId: number) {
        this.grades.get(gradebookId)
    }

    readAll(gradebookId: number) {
        this.read(gradebookId, 22)
    }
}

