interface LMSschema {
    id: number;
}

export class MainLMSModel {
    data: Map<number, LMSschema>;
    constructor() {
        this.data = new Map();
    }
    add(obj: LMSschema) {
        this.data.set(obj.id, obj)
    }


    remove(obj: { id: number; }) {
        if (this.data.has(obj.id)) {
            this.data.delete(obj.id);
        } else {
            throw new Error('Error delete');
        }
    }

    verify(obj: { id: number; }) {
        return this.data.has(obj.id) ? true : false;
    }

    readAll() {
        return [this.data]
    }
}
