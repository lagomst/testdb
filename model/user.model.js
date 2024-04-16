import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    }
});

const userModel = mongoose.model('User', UserSchema, 'users');
export default userModel;