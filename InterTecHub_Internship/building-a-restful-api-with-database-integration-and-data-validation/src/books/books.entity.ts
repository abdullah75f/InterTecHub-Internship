import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: number;

  @Column()
  author: string;

  @Column()
  publishedYear: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
