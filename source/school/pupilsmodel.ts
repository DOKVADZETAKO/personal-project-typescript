import { ValidatorModel } from './validatormodel';

interface phones {
    phone: string,
    primary: boolean
}

interface Pupilschema {
    id?: number;
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    phones: phones[],
    sex: string,
    description?: string,
}

export class MainPupilsModel {
    data2: Map<number, Pupilschema>;
    id: number;
    constructor() {
        this.data2 = new Map();
        this.id = Math.floor(Math.random() * 100000000)

    }

    add(pupil: Pupilschema) {
        ValidatorModel.validator(pupil)
        let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
        pupil.id = id;
        this.data2.set(id, pupil);
        return this.data2.get(id);

    }


    read(id: number | undefined) {
        if (!id) {
            return;
        }
        if (this.data2.has(id)) {
            return this.data2.get(id);
        }
        else {
            throw new Error("ERRRROR1");
        }

    }

    update(id: number | undefined, updatedProfile2: Pupilschema) {
        if (!id) {
            return;
        }
        ValidatorModel.validator(updatedProfile2);
        return this.data2.set(id, updatedProfile2)
    }


    remove(id: number | undefined) {
        if (!id) {
            return;
        }
        if (this.data2.has(id)) {
            this.data2.delete(id);
        }
        else {
            throw new Error("ERRRROR");
        }

    }
}

