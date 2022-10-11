const { buildSchema } = require('graphql')

// name: return type
//mutation is used for changing data. Query is for getting
//to call a mutation, you must use the keyword mutation before the query
module.exports = buildSchema(`
type Student {
    id: ID!
    firstName: String
    lastName: String
    email: String
}

input StudentInput {
    firstName: String
    lastName: String
    email: String
}

type Course {
    id: String
    name: String
    location: String
    capacity: Int
    students: [Student]
}

input CourseInput {
    id: String
    name: String
    location: String
    capacity: Int
    students: [Int]
}

type Query {
    getAllStudents: [Student]
    getStudent(studentId: Int): Student
    getCoursesForStudent(studentId: Int): [Course]
    getAllCourses: [Course]
}

type Mutation {
    createStudent(input: StudentInput): String
    deleteStudent(studentId: Int): String
    enroll(studentId: ID!, courseId: String): String

    createCourse(input: CourseInput): String
    deleteCourse(courseId: String): String
}

`);

