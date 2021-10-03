const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };

   //Find Person
   function findPerson(type,id){

        return school[type].filter(i=>i.id==id)
   }
   console.log(findPerson('teachers',1));

   //Assign Student
   function assignStudent(id,subj){

    console.log(school['teachers']);
    school['teachers'].forEach(teacher=>{

        
        if(teacher.capacityLeft>0&&teacher.subjects.indexOf(subj)>-1
        && teacher.students.indexOf(id)==-1){
        teacher.students.push(id);
         teacher.capacityLeft--;   
        }
    })
    console.log(school['teachers']);
   }

   assignStudent(1,'history')

   function assignTeachersSubject(id,subj){
    let selectedTeacher;
    school['teachers'].forEach(teacher=>{

        if(teacher.id==id&&teacher.subjects.indexOf(subj)==-1) {
            teacher.subjects.push(subj)
            selectedTeacher=teacher

        }
    })
    console.log(selectedTeacher);
   }

   console.log(
       assignTeachersSubject(1,'programming')
   );
