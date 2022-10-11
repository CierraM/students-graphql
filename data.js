const { DataStore } = require('notarealdb');

store = new DataStore('./data');

module.exports = {
    students: store.collection('students'),
    courses: store.collection('courses')
}