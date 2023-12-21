import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;
}