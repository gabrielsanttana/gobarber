import {Router, Request, Response} from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', (request: Request, response: Response) => {
  try {
    const {email, password} = request.body;

    return response.status(200).json({email, password});
  } catch (error) {
    return response.status(400).json({error: error.messagge});
  }
});

export default sessionsRouter;
