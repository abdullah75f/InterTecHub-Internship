import { timeStamp } from 'console';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User {
  @Column()
  name: string;
  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
