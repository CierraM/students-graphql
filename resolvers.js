const fs = require('fs');
const studentsData = './data/students.json';
const coursesData = ('./data/courses.json');
// you need a method resolver for every query in your schema

const root = {
    getAllStudents: async () => {
        let students = fs.readFileSync(studentsData, 'utf8')
        
        return JSON.parse(students);
        
    },
    getStudent: ({studentId}) => {
        let data = fs.readFileSync(studentsData, 'utf8')
        let students = JSON.parse(data);
        return students.filter(s => s.id === studentId)[0]
    },
    getCoursesForStudent: ({ studentId }) => {
        let data = fs.readFileSync(coursesData, 'utf8')
        let courses = JSON.parse(data);
        let result = courses.filter(c => c.students.includes(studentId))
        return result
    },
    getAllCourses: () => {
        let coursesJson = fs.readFileSync(coursesData, 'utf8')
        let studentsJson = fs.readFileSync(studentsData, 'utf8')
        let courses = JSON.parse(coursesJson);
        let students = JSON.parse(studentsJson)
        courses.forEach((course, index) => {
            course.students.forEach((studentId)=> {
                students.forEach(student => {
                    if (student.id == studentId) {
                        course.students[index] = student;
                    }
                })
            })
        })
        return courses
        
    },

    createStudent: ({input}) => {
        let data = fs.readFileSync(studentsData, 'utf8')
        let students = JSON.parse(data);
        let newStudent = {
            id: students[students.length - 1].id + 1,
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email
        }
        students.push(newStudent);
        fs.writeFileSync(studentsData, JSON.stringify(students));
        return `added new student}`
    },

    deleteStudent: ({studentId}) => {
        let data = fs.readFileSync(studentsData, 'utf8')
        let students = JSON.parse(data);
        let indexToDelete = students.findIndex(s => s.id == studentId);
        students.splice(indexToDelete, 1)
        fs.writeFileSync(studentsData, JSON.stringify(students));
        return `Deleted student: ${studentId}`
    },

    enroll: ({ studentId, courseId }) => {
        let courseJson = fs.readFileSync(coursesData, 'utf8')
        let courses = JSON.parse(courseJson);
        let courseIndex = courses.findIndex(c => c.id == courseId);
        courses[courseIndex].students.push(parseInt(studentId));
        fs.writeFileSync(coursesData, JSON.stringify(courses));
        return `enrolled student ${studentId} in course ${courseId}`
    },

    createCourse: ({ input }) => {
        let data = fs.readFileSync(coursesData, 'utf8')
        let courses = JSON.parse(data);
        
        let newCourse = {
            id: input.id,
            name: input.name,
            location: input.location,
            capacity: input.capacity,
            students: input.students
        }
        courses.push(newCourse);
        fs.writeFileSync(coursesData, JSON.stringify(courses));
        return `added new course`
    },
    deleteCourse: ({courseId}) => {
        let data = fs.readFileSync(coursesData, 'utf8')
        let courses = JSON.parse(data);
        let indexToDelete = courses.findIndex(s => s.id == courseId);
        courses.splice(indexToDelete, 1)
        fs.writeFileSync(coursesData, JSON.stringify(courses));
        return `Deleted student: ${courseId}`
    }
}

module.exports = {root}