import {isEqual} from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create({provider, date}: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({provider, date});

    this.appointments.push(appointment);

    return appointment;
  }

  public isDateAlreadyBooked(date: Date) {
    const isDateAlreadyBooked = this.appointments.find((appointment) =>
      isEqual(appointment.date, date),
    );

    return isDateAlreadyBooked;
  }

  public getAllAppointments() {
    return this.appointments;
  }
}

export default AppointmentsRepository;
