import {Router, Request, Response} from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request: Request, response: Response) => {
  try {
    return response.send('/users');
  } catch (error) {
    return response.status(400).json({error: error.message});
  }
});

export default usersRouter;
