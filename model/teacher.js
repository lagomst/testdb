import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  surname: String,
  name: String,
  sex: String,
  date_of_birth: Date,
  phone_number: String,
  email: String,
  password: String,
  role: Number,
  status: String,
  image: String,
  specialization_code: String,
  department_code: {type: ObjectId, ref: 'Department'}
});

const Teacher = mongoose.model('Teacher', teacherSchema, 'teachers');

export default Teacher;
