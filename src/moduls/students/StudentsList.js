export class studentsList {
    constructor() {
        this.students = [];
    }

    getAllStudents() {
        return this.students;
    }

    getStudentById(id) {
        return this.students.find((student) => student.id === id);
    }

    createStudent(student) {
        this.students.push(student);
    }
    
    updateStudent(id, name, email, age){
        const student = this.getStudentById(id);

        if(!student) {
            return null;
        }

        student.name = name;
        student.email = email;
        student.age = age;

        return student;
    }
    
    removeStudent(studentId) {
     this.students = this.students.filter((student) => student.id !== studentId);
        
    }
}