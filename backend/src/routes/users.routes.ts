import {Router, Request, Response} from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

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

export default usersRouter;
