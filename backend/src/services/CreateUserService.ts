import {getRepository} from 'typeorm';
import {hash} from 'bcrypt';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({name, email, password}: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const emailAlreadyExists = await usersRepository.findOne({where: {email}});

    if (emailAlreadyExists) {
      throw new Error("There's already an user with this email");
    }

    const encryptedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: encryptedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
