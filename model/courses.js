import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Schema for MON_HOC
const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true, unique: true },
  credits: {type: Number, min: 0},
  name: String,
  labRate: {type: Number, min: 0, max: 1, message: 'labRate must be within 0 and 1'},
  finalRate: {type: Number, min: 0, max: 1, message: 'finalRate be within 0 and 1'},
  midtermRate: {type: Number, min: 0, max: 1, message: 'midtermRate must be within 0 and 1'},
  practiceClass: {type: Number, min: 0},
  theoryClass: {type: Number, min: 0},
});

const course = mongoose.model('Course', courseSchema, 'courses');

export default course;