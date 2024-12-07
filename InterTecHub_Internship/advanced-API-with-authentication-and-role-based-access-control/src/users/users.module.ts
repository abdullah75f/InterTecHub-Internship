import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { BooksModule } from 'src/books/books.module';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => BooksModule),
    forwardRef(() => ReviewsModule),
  ],
  providers: [UsersService, AuthService],
  controllers: [UsersController],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}