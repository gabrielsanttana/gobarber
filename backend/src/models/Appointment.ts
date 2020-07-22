import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar')
  name: string;
  @Column('varchar')
  email: string;
  @Column('varchar')
  password: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  modified_at: Date;
}

export default Appointment;
