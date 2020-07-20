import {Router, Request, Response} from 'express';
import {parseISO} from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();
const createAppointmentService = new CreateAppointmentService(appointmentsRepository);

appointmentsRouter.get('/', (request: Request, response: Response) => {
  const appointments = appointmentsRepository.getAllAppointments();

  return response.status(200).json(appointments);
});

appointmentsRouter.post('/', (request: Request, response: Response) => {
  const {provider, date} = request.body;

  const parsedDate = parseISO(date);
  
  const appointment = createAppointmentService.execute({provider, date: parsedDate});

  return response.status(200).json(appointment);
});

export default appointmentsRouter;
