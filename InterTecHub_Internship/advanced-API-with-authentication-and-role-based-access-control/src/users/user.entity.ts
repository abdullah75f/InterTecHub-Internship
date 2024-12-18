import { Book } from 'src/books/books.entity';
import { Review } from '../reviews/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Favorite } from 'src/books/favorite.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  role: 'admin' | 'user';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Review, (review) => review.user)
  reviews?: Review[];

  @OneToMany(() => Book, (book) => book.user)
  books?: Book[];
  
  @OneToMany(() => Favorite, (favorite) => favorite.user, { cascade: true })
  favorites?: Favorite[];
}
