interface phones {
    phone: string,
    primary: boolean
}

interface PupilSchema {
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

interface GroupSchema {
    id: number;
    room: number;
    pupils: PupilSchema[],
    groupId: number,
}

export class MainGroupsModel {
    groups: Map<number, GroupSchema>;
    constructor() {
        this.groups = new Map();
    }

    add(room: number, id: number) {
        id = Math.floor(Math.random() * 100000000)
        if (!id) {
            return;
        }
        this.groups.set(id, {
            id,
            room,
            pupils: [],
            groupId: id,
        });
        return id;
    }

    addPupil(groupId: number, pupil: PupilSchema) {
        if (!groupId) {
            return;
        }
        if (this.groups.has(groupId)) {
            let group = this.groups.get(groupId);
            if (group) {
                group.pupils.push(pupil);
            }
        } else {
            throw new Error("Some Error");
        }
    }

    removePupil(groupId: number, pupil: PupilSchema, pupilId: number) {
        if (this.groups.has(groupId)) {
            const group = this.groups.get(groupId);
            if (group) {
                for (let someth of group.pupils) {
                    if (someth.id === pupilId) {
                        let group = this.groups.get(groupId);
                        if (group) {
                            return group.pupils.pop();
                        }
                    }
                }
            }

        } else {
            throw new Error("Some Error");
        }
    }

    update(groupId: number, object: { room: number; }) {
        if (this.groups.has(groupId)) {
            const group = this.groups.get(groupId);
            if (group) {
                group.room = object.room;
            }
        } else {
            throw new Error("Some Error");
        }
    }


    read(groupId: number) {
        if (this.groups.has(groupId)) {
            const group = this.groups.get(groupId)
            if (group) {
                let groupInfo = {
                    'id': groupId,
                    'room': group.room
                };
                return groupInfo;
            }

        }
        else {
            throw new Error("Some Error")
        }
    }

    readAll() {
        if (arguments.length > 0) {
            throw new Error("Some Error");
        } else {
            return Array.from(this.groups);
        }
    }
}



