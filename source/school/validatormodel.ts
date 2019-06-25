interface schema {
    dateOfBirth: string,
    sex: string
}

export class ValidatorModel {
    static validator(object: schema) {
        if (object.sex !== 'male' && object.sex !== 'femail') {
            throw new Error("Only male or female");
        }
        if (object.dateOfBirth.indexOf('.') !== 2 || object.dateOfBirth.lastIndexOf('.') !== 5
            || +object.dateOfBirth.substring(0, 2) > 31 || +object.dateOfBirth.substring(3, 5) > 12) {
            throw new Error("Not right Format");
        }

    }
}
