interface Subjectsschema {
    title: string,
    lessons: number,
    description: string
}

export class MainSubjectsModel {
    title: string;
    lessons: number;
    description: string;
    id: number;
    constructor(obj: Subjectsschema) {
        this.id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 1000);
        this.title = obj.title;
        this.lessons = obj.lessons;
        this.description = obj.description;
    }
}

