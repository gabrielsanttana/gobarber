import {Router, Request, Response} from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const {email, password} = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const {message, token} = await authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json({message, token});
  } catch (error) {
    return response.status(400).json({error: error.message});
  }
});

export default sessionsRouter;
