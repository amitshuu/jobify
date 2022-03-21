import mongoose from 'mongoose';
import validator from 'validator';
const UserSchena = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email!',
    },
    required: [true, 'Please provide a email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
    maxlength: 20,
    trim: true,
    default: 'My city',
  },
});

export default mongoose.Model('User', UserSchena);
