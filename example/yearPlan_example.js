//Example insert
import mongoose from 'mongoose';
import YearPlan from './model/yearPlan.js';

mongoose.connect("mongodb+srv://viewer123:keytovictory@cluster0.j4e46yk.mongodb.net/?retryWrites=true&w=majority");
const findUpdateOption = {new: true, upsert: true};
const mh1_filter = {semester: 1, year: 2024}
const mh1_update = {
    semester: 1,
    year: 2024,
    timeBeginCourseRegist: new Date("2024-08-05"),
    timeEndCourseRegist: new Date("2024-08-15"),
    timeBeginStudy: new Date("2024-09-05"),
    timeEndStudy: new Date("2024-12-31"),
    courseCode: [
        'MT2008', 'MT2009'
    ]
};
const mh1 = await YearPlan.findOneAndUpdate(mh1_filter, mh1_update, findUpdateOption);
console.log(mh1);

const mh2_filter = {semester: 2, year: 2023};
const mh2_update = {
    semester: 2,
    year: 2023,
    timeBeginCourseRegist: new Date("2023-12-03"),
    timeEndCourseRegist: new Date("2023-12-15"),
    timeBeginStudy: new Date("2024-01-03"),
    timeEndStudy: new Date("2024-05-05"),
    courseCode: [
        'MT2018', 'MT2010'
    ]
    
};
const mh2 = await YearPlan.findOneAndUpdate(mh2_filter, mh2_update, findUpdateOption);
console.log(mh2);
