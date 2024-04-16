import mongoose from 'mongoose';

//Schema for KE_HOACH_NAM
const yearPlanSchema = new mongoose.Schema({
    semester: Number, 
    year: Number,
    timeBeginCourseRegist: Date,
    timeEndCourseRegist: {
        type: Date, 
    },
    timeBeginStudy: Date,
    timeEndStudy: {
        type: Date
    },
    courseCode: { type: [String], ref: 'Course'},
});
yearPlanSchema.pre('validate', function(next){
    if (this.timeEndCourseRegist >= this.timeBeginCourseRegist){
        next(new Error('End date must larger than begin date in course registration time'));
    }
    if (this.timeEndStudy >= this.timeBeginStudy){
        next(new Error('End date must larger than begin date in study time'))
    }
});

const yearPlan = mongoose.model('Year plan', yearPlanSchema, 'yearPlan');
export default yearPlan;