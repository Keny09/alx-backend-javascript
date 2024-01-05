export default class ClassRoom {
    constructor(maxStudentsSize) {
       if (typeof maxStudentsSize !== 'number' || maxStudentsSize <= 0) {
         throw new Error('maxStudentsSize must be a positive number');
       }
   
       this._maxStudentsSize = maxStudentsSize;
       this._students = [];
    }
   
    get maxStudentsSize() {
       return this._maxStudentsSize;
    }
   
    get students() {
       return this._students;
    }
   
    addStudent(student) {
       if (this._students.length >= this._maxStudentsSize) {
         throw new Error('Class is full');
       }
   
       this._students.push(student);
    }
   
    removeStudent(studentId) {
       const index = this._students.findIndex(student => student.id === studentId);
   
       if (index === -1) {
         throw new Error('Student not found');
       }
   
       this._students.splice(index, 1);
    }
   }