import mongoose from 'mongoose';

const scoreCourseSchema = new mongoose.Schema({
    courseCode: { type: String, required: true},
    lab: Number, 
    midterm: Number,
    final: Number,
    average: {
        type: Number,
    },
    
});

const scoreSemesterSchema = new mongoose.Schema({
    semester: {type: String, required: true},
    courseScore: {
        type: [scoreCourseSchema]
    },
    graded: {
        type: String,
        default: function(){
            //will fill in later
            return "NaN";
        }
    }
});

const gradeSchema = new mongoose.Schema({
    mssv: { type: String, required: true, unique: true},
    grade: {
        type: [scoreSemesterSchema]
    }
});

const gradeModel = mongoose.model('Grade', gradeSchema, 'grades');
export default gradeModel;