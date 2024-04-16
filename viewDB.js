import mongoose from 'mongoose';
import Course from './model/courses.js';
import Grade from './model/grade.js';
import StudentLite from './model/student_lite.js';
import YearPlan from './model/yearPlan.js';

//Connect to database as a user
//userName: viewer123, password: keytovictory
mongoose.connect("mongodb+srv://viewer123:keytovictory@cluster0.j4e46yk.mongodb.net/?retryWrites=true&w=majority");

//CHANGE COLLECTION YOU WANT TO VIEW HERE
//THERE ARE 4 COLLECTION: Course, Grade, StudentLite, YearPlan
const collections = StudentLite;

//print out query result
const query = await collections.find({});
console.log(query);