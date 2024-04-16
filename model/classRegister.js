//Schema for DS_LOP_TC
import mongoose from 'mongoose';

const ClassCreditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    teacher_id: {type: String},
});

const CourseRegisterSchema = new mongoose.Schema({
    course_code: {type: String},
    course_name: {type: String},
    plan_code: {type: String},
    class:{
        type: [ClassCreditSchema],
    },
    maxSlot: {type: Number},
    takenSlot: {type: Number, max: this.maxSlot}
});

const courseRegister = mongoose.model('Class Credit', CourseRegisterSchema);
export default courseRegister;