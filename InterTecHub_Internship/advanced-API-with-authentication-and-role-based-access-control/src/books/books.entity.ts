import { User } from 'src/users/user.entity';
import { Review } from '../reviews/review.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Favorite } from './favorite.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  author: string;

  @Column()
  publishedYear: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Review, (review) => review.book, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  reviews: Review[];

  @OneToMany(() => Favorite, (favorite) => favorite.book, { cascade: true })
  favorites?: Favorite[];

  @ManyToOne(() => User, (user) => user.books, { onDelete: 'CASCADE' })
  user: User;
}
