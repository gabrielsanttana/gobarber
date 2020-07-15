import {Router, Request, Response} from 'express';
import {uuid} from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request: Request, response: Response) => {
  const {provider, date} = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  return response.status(200).json(appointment);
});

export default appointmentsRouter;
