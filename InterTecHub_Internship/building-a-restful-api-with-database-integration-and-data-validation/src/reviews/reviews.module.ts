import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entitiy';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
})
export class ReviewsModule {}
