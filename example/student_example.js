//Example insert
import mongoose from 'mongoose';
import StudentLite from './model/student_lite.js';

mongoose.connect("mongodb+srv://viewer123:keytovictory@cluster0.j4e46yk.mongodb.net/?retryWrites=true&w=majority");
const findUpdateOption = {new: true, upsert: true};
//this student model is very simple just for example sake
const mh1_filter = {maSoSinhVien: '123456'}
const mh1_update = {
        maSoSinhVien: '123456',
        hoVaTenLot: 'Eagle',
        ten: 'Griffith', 
};
const mh1 = await StudentLite.findOneAndUpdate(mh1_filter, mh1_update, findUpdateOption);
console.log(mh1);

const mh2_filter = {maSoSinhVien: '654321'};
const mh2_update = { 
        maSoSinhVien: '654321',
        hoVaTenLot: 'Britannica',
        ten: 'Askellad',
};
const mh2 = await StudentLite.findOneAndUpdate(mh2_filter, mh2_update, findUpdateOption);
console.log(mh2);

const mh3_filter = {maSoSinhVien: '135797'};
const mh3_update = {
        maSoSinhVien: '135797',
        hoVaTenLot: 'Vagabond',
        ten: 'Yamoto',
};
const mh3 = await StudentLite.findOneAndUpdate(mh3_filter, mh3_update, findUpdateOption);
console.log(mh3);