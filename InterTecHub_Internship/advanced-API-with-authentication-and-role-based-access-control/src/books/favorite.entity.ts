import { User } from 'src/users/user.entity';
import { Book } from './books.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('favorites')
@Unique(['user', 'book'])
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Book, (book) => book.favorites, { onDelete: 'CASCADE' })
  book: Book;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
