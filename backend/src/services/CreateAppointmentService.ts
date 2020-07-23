import {startOfHour} from 'date-fns';
import {getCustomRepository} from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({provider_id, date}: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const parsedDate = startOfHour(date);

    const isDateAlreadyBooked = await appointmentsRepository.isDateAlreadyBooked(
      parsedDate,
    );

    if (isDateAlreadyBooked) {
      throw Error("There's already an appointment booked for this date");
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: parsedDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
