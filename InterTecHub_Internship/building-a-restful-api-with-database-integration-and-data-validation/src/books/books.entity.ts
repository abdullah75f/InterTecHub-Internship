import { Review } from "../reviews/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Review, (review) => review.book, { onDelete: 'CASCADE' })
  reviews: Review[];
}
