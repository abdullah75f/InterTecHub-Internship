import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Review } from 'src/reviews/review.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Review])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}