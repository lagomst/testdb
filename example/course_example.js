//Example insert
import mongoose from 'mongoose';
import Course from './model/courses.js';

mongoose.connect("mongodb+srv://viewer123:keytovictory@cluster0.j4e46yk.mongodb.net/?retryWrites=true&w=majority");
const findUpdateOption = {new: true, upsert: true};
const mh1_filter = {courseCode: 'MT2008'}
const mh1_update = {
    courseCode: 'MT2008',
    credit: 2,
    name: 'Lap Trinh Nang Cao',
    labRate: 0.2,
    midtermRate: 0.3,
    finalRate: 0.5,
    practiceClass: 5,
    theoryClass: 10
};
const mh1 = await Course.findOneAndUpdate(mh1_filter, mh1_update, findUpdateOption);
console.log(mh1);

const mh2_filter = {courseCode: 'MT2009'};
const mh2_update = {
    courseCode: 'MT2009',
    credit: 3,
    name: 'DSA',
    labRate: 0.5,
    midtermRate: 0,
    finalRate: 0.5,
    practiceClass: 7,
    theoryClass: 9
};
const mh2 = await Course.findOneAndUpdate(mh2_filter, mh2_update, findUpdateOption);
console.log(mh2);

const mh3_filter = {courseCode: 'MT2010'};
const mh3_udpate = {
    courseCode: 'MT2010',
    credit: 3,
    name: 'Kien truc may tinh',
    labrate: 0.2,
    midtermRate: 0.3,
    finalRate: 0.5,
    practiceClass: 6,
    theoryClass: 10 
};
const mh3 = await Course.findOneAndUpdate(mh3_filter, mh3_udpate, findUpdateOption);
console.log(mh3);