import {Router, Request, Response} from 'express';
import multer from 'multer';
import CreateUserService from '../services/CreateUserService';
import verifyAuthentication from '../middlewares/verifyAuthentication';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request: Request, response: Response) => {
  try {
    const createUserService = new CreateUserService();

    const {name, email, password} = request.body;

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(200).json(user);
  } catch (error) {
    return response.status(400).json({error: error.message});
  }
});

usersRouter.patch(
  '/avatar',
  verifyAuthentication,
  upload.single('avatar'),
  (request: Request, response: Response) => {
    return response.status(200).json({message: 'OK'});
  },
);

export default usersRouter;
