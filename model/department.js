import mongoose from 'mongoose';

// Schema for depart
const departSchema = new mongoose.Schema({
  depart_name: String,
  head_depart: {type: mongoose.Types.ObjectId, ref: 'Teacher'}
});

const department = mongoose.model('Department', departSchema, 'departments');

export default department;