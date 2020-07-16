import {isEqual} from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }

  public isDateAlreadyBooked(date: Date): Appointment | null {
    const isDateAlreadyBooked = this.appointments.find((appointment) =>
      isEqual(appointment.date, date),
    );

    return isDateAlreadyBooked || null;
  }

  public getAllAppointments() {
    return this.appointments;
  }
}

export default AppointmentsRepository;
