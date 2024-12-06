import { forwardRef, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { ReviewsModule } from '../reviews/reviews.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    forwardRef(() => ReviewsModule),
    forwardRef(() => UsersModule),
  ],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [BooksService, TypeOrmModule],
})
export class BooksModule {}
