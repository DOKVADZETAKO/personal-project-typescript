import { ValidatorModel } from './validatormodel';

interface emails {
    email: string,
    primary: boolean
}

interface phones {
    phone: string,
    primary: boolean
}

interface subjects {
    subject: string
}

interface Teacherschema {
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    emails: emails[],
    phones: phones[],
    sex: string,
    subjects: subjects[],
    description?: string,
}

export class MainTeachersModel {
    data: Map<number, Teacherschema>;
    id: number;
    constructor() {
        this.data = new Map();
        this.id = Math.floor(Math.random() * 100000000)
    }

    add(teacher: Teacherschema) {
        ValidatorModel.validator(teacher)
        let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
        this.data.set(id, teacher);
        return id;
    }

    read(id: number) {
        if (this.data.has(id)) {
            return this.data.get(id);
        }
        else {
            throw new Error("ERRRROR");
        }

    }

    update(id: number, updatedProfile: Teacherschema) {
        ValidatorModel.validator(updatedProfile);
        this.data.set(id, updatedProfile);
        return id;
    }


    remove(id: number) {
        if (this.data.has(id)) {
            this.data.delete(id);
        }
        else {
            throw new Error("ERRRROR");
        }

    }

}
