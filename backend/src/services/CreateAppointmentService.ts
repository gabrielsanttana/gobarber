import {startOfHour} from 'date-fns';
import {getCustomRepository} from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({provider, date}: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const parsedDate = startOfHour(date);

    const isDateAlreadyBooked = await appointmentsRepository.isDateAlreadyBooked(
      parsedDate,
    );

    if (isDateAlreadyBooked) {
      throw Error("There's already an appointment booked for this date");
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: parsedDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
