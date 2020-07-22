import {EntityRepository, Repository} from 'typeorm';
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async isDateAlreadyBooked(date: Date): Promise<Appointment | null> {
    const isDateAlreadyBooked = await this.findOne({where: {date}});

    return isDateAlreadyBooked || null;
  }
}

export default AppointmentsRepository;
