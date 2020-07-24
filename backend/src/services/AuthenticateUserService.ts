import {getRepository} from 'typeorm';
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  message: string;
  token: string;
}

class UserAuhenticationService {
  public async execute({email, password}: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({where: {email}});

    if (!user) {
      throw Error('Incorrect email or password');
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw Error('Incorrect email or password');
    }

    const token = sign({}, '4e4d6c332b6fe62a63afe56171fd3725', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      message: `Welcome, ${user.name}!`,
      token,
    };
  }
}

export default UserAuhenticationService;
