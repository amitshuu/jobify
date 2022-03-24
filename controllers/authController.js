import User from '../models/User.js';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password, lastName } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values!');
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new BadRequestError('User is already exist!');
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

const login = (req, res) => {
  res.send('Login');
};

const updateUser = (req, res) => {
  res.send('Update');
};

export { register, login, updateUser };
