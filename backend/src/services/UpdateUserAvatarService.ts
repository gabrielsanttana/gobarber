import path from 'path';
import fs from 'fs';
import {getRepository} from 'typeorm';
import User from '../models/User';
import uploadConfig from '../config/upload';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({user_id, avatarFilename}: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({where: {id: user_id}});

    if (!user) {
      throw new Error('Only authenticated users can update avatar');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    const userWithUpdatedAvatar = await userRepository.save(user);

    return userWithUpdatedAvatar;
  }
}

export default UpdateUserAvatarService;
