import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    // Private Information
  private_info:{
    maSoSinhVien: { type: String, required: true, unique: true },
    hoVaTenLot: String,
    ten: String,
    ngaySinh: Date,
    gioiTinh: { type: String, enum: ['Nam', 'Nu'] },
    soCCCD: String,
    ngayCapCCCD: Date,
    noiCapCCCD: String,
    khoa: String,
    maLop: { type: String, ref: 'Lop' },
    thoiDiemCapNhatAnhTheGanNhat: Date,
    diaChi: String,
    soDienThoai: String,
    emailTruongCap: String,
    emailLienLac: String,
  },
  // Training information
  training_info:{
    namNhapHoc: String,
    giaHanHocKy: String,
    soHocKyDaoTao: Number,
    soHocKyDaoTaoToiDa: Number,
    thoiGianDaoTao: String,
    thoiGianDaoTaoToiDa: String,
    namHoc: String,
    capHoc: String,
    heDaoTao: String,
    nganhDaoTao: String,
    trangThaiSinhVien: String,
  }
  
});

const Student = mongoose.model('Student', studentSchema, 'students');

export default Student;
