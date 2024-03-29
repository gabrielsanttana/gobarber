import {Router, Request, Response} from 'express';
import {parseISO} from 'date-fns';
import {getCustomRepository} from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import verifyAuthentication from '../middlewares/verifyAuthentication';

const appointmentsRouter = Router();

appointmentsRouter.use(verifyAuthentication);

appointmentsRouter.get('/', async (request: Request, response: Response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);

  const appointments = await appointmentsRepository.find();

  return response.status(200).json(appointments);
});

appointmentsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const {provider_id, date} = request.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService();

    const appointment = await createAppointmentService.execute({
      provider_id,
      date: parsedDate,
    });

    return response.status(200).json(appointment);
  } catch (error) {
    return response.status(400).json({error: error.message});
  }
});

export default appointmentsRouter;
