import { Book } from 'src/books/books.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  rating: number;

  @Column('text')
  comment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAT: Date;

  @ManyToOne(() => Book, (book) => book.reviews)
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'userId' })
  user: User;
}
