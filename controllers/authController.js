import User from '../models/User.js';
import { BadRequestError, UnAutonticatedError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values!');
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new BadRequestError('Email is already in use');
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(201).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
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

const updateUser = async (req, res) => {
  const { email, lastName, location, name } = req.body;
  if (!email || !lastName || !location || !name) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });
  user.email = email;
  user.name = name;
  user.location = location;
  user.lastName = lastName;
  await user.save();
  const token = user.createJWT();
  res.status(200).json({ user, location: user.location, token });
};

export { register, login, updateUser };
