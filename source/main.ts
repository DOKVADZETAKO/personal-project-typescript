import {
  MainSubjectsModel, MainLMSModel, ValidatorModel,
   MainTeachersModel, MainPupilsModel, MainGroupsModel, MainGradeBooksModel

} from './school'


const history = new MainSubjectsModel({
  title: 'History',
  lessons: 24,
  description: "adasd",
});

const asds = new MainSubjectsModel({
  title: 'asda',
  lessons: 24,
  description: "adasd",
});

console.log(history.id)
console.log(asds)

// finish first modile


const lms = new MainLMSModel();

lms.add(history)
lms.add(asds);
lms.remove(asds);


// finish second module



let data = {
  name: {
    first: "tako",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "02.02.1111",
  emails: [
    {
      email: "string@asdasd.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male",
  subjects: [
    {
      subject: "stasdasdring"
    }
  ],
  description: "asdasd",
};

let updatedProfile = {
  name: {
    first: "ssss",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "02.02.1111",
  emails: [
    {
      email: "string@asdasd.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male",
  subjects: [
    {
      subject: "stasdasdring"
    }
  ],
  description: "asdasd",
};


const teachers = new MainTeachersModel();

const id = teachers.add(data);

teachers.read(id)

const teacherId2 = teachers.update(id, updatedProfile)

teachers.remove(id)


// finish teachers module



let data2 = {
  name: {
    first: "pupils",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "02.02.1111",
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male",
  description: "asdasd",
};

let updatedProfile2 = {
  name: {
    first: "asdasdas",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "02.02.1111",
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male",
  description: "asdasd",
};



const pupils = new MainPupilsModel();

const pupil = pupils.add(data2);
if (pupil) {
  pupils.read(pupil.id)
  pupils.update(pupil.id, updatedProfile2)
  pupils.remove(pupil.id)
}


// finish pupils module

const room = 236;
const groups = new MainGroupsModel();
const groupId = groups.add(room, id);



if (groupId && pupil) {
  groups.addPupil(groupId, pupil);
  groups.update(groupId, {
    room: 237
  });
  
  groups.read(groupId);
  groups.readAll()
}
 

// finish groups model

if(pupil){
  const pupilId = pupil.id;
}

const teacherId3 = teacherId2;
const gradebooks = new MainGradeBooksModel( groups, teachers, lms );

if (groupId && pupil) {
  const level = 1;
  const gradebookId = gradebooks.add(level, groupId);

  gradebooks.clear();

  const record = {
    pupilId: pupil.id,
    teacherId: teacherId2,
    subjectId: history.id,
    lesson: 1,
    mark: 9
  };

  gradebooks.addRecord(gradebookId, record);

  const students = gradebooks.readAll(gradebookId);
}

// const oliver = gradebooks.read(gradebookId, pupil);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }
