import {Router, Request, Response} from 'express';
import {startOfHour, parseISO, isEqual} from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request: Request, response: Response) => {
  const appointments = appointmentsRepository.getAllAppointments();

  return response.status(200).json(appointments);
});

appointmentsRouter.post('/', (request: Request, response: Response) => {
  const {provider, date} = request.body;

  const parsedDate = startOfHour(parseISO(date));

  if (appointmentsRepository.isDateAlreadyBooked(parsedDate)) {
    return response
      .status(400)
      .json({error: "There's already an appointment booked for this date"});
  }

  const appointment = appointmentsRepository.create({provider, date: parsedDate});

  return response.status(200).json(appointment);
});

export default appointmentsRouter;
