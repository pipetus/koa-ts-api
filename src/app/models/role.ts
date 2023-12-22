import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('roles')
export default class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;
}
