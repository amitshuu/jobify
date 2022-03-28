import User from '../models/User.js';
import { BadRequestError, UnAutonticatedError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password, lastName } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values!');
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new BadRequestError('Email is already in use');
  }
  const user = await User.create({ name, email, password, lastName });
  const token = user.createJWT();
  res.status(201).json({
    user: {
      name,
      email,
      lastName,
      location: user.location,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAutonticatedError('Invalid Credentials');
  }
  const isCorrect = await user.comparePassword(password);

  if (!isCorrect) {
    throw new UnAutonticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(200).json({ user, token, location: user.location });
};

const updateUser = (req, res) => {
  res.send('Update');
};

export { register, login, updateUser };
