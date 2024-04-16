import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    // Private Information
    maSoSinhVien: { type: String, required: true},
    hoVaTenLot: String,
    ten: String,
});

const Student = mongoose.model('StudentLite', studentSchema, 'studentsLite');

export default Student;
