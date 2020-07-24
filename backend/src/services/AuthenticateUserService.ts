import {getRepository} from 'typeorm';
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../config/auth';

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
      throw new Error('Incorrect email or password');
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new Error('Incorrect email or password');
    }

    const {secret, expiresIn} = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    const [userFirstName] = user.name.split(' ');

    return {
      message: `Welcome, ${userFirstName}!`,
      token,
    };
  }
}

export default UserAuhenticationService;
