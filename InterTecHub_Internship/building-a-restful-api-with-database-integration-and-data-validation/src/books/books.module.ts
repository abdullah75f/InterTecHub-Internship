import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Review } from 'src/reviews/review.entity';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), ReviewsModule, UsersModule],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
