import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { BooksModule } from 'src/books/books.module';
import { UsersModule } from 'src/users/users.module';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Book } from 'src/books/books.entity';
import { User } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Review]),
    forwardRef(() => BooksModule),
    forwardRef(() => UsersModule),
  ],
  providers: [ReviewsService],
  controllers: [ReviewsController],
  exports: [TypeOrmModule],
})
export class ReviewsModule {}
