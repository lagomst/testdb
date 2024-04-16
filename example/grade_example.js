//Example insert
import mongoose from 'mongoose';
import Grade from './model/grade.js';

mongoose.connect("mongodb+srv://viewer123:keytovictory@cluster0.j4e46yk.mongodb.net/?retryWrites=true&w=majority");
//this Grade model is very simple just for example sake
const findUpdateOption = {new: true, upsert: true};
const mh1_filter = {mssv: '123456'}
const mh1_update = {
    mssv: '123456',
    grade: [
        {
            semester: new mongoose.Types.ObjectId('661e2c7231089add843fb509'),
            courseScore: [
                {
                    courseCode: 'MT2008',
                    lab: 8,
                    midterm: 6,
                    final: 7 
                },
                {
                    courseCode: 'MT2009',
                    lab: 5,
                    midterm: 5,
                    final: 6
                }
                
            ]
        }
    ]
};
const mh1 = await Grade.findOneAndUpdate(mh1_filter, mh1_update, findUpdateOption);
console.log(mh1);
