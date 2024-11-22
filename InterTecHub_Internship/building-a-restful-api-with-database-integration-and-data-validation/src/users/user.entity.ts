import { timeStamp } from 'console';
import { Review } from 'src/reviews/review.entitiy';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @Column()
  name: string;
  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
