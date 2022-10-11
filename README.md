# Overview

This is a simple node.js server using GraphQL to keep track of students enrolled in courses. To start the app, run `npm install` then start the server with `node app.js`. A GraphIQL playground is available at localhost:9000/graphql

I wrote this software to learn GraphQL. Sample requests are in query.txt

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

This server includes endpoints for:
    - getAllStudents
    - getCoursesForStudent
    - getStudent
    - getAllCourses
    - createStudent
    - deleteStudent
    - enroll
    - createCourse
    - deleteCourse


# Development Environment

I made this server using Node.js and express-graphql

# Useful Websites
* [GraphQL Docs](https://graphql.org/)
* [Academind Tutorial](https://pro.academind.com/courses/enrolled/767386)

# Future Work

* Connect to an actual database instead of a text file
* Write update endpoints
* Add additional entitites to make the app more complex, to better showcase the possibilities of GraphQL