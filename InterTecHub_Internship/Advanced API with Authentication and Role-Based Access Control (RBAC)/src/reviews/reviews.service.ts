import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/books.entity';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { User } from 'src/users/user.entity';
import { CreateReviewsDto } from './create-reviews.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async CreateReview(bookId: number, reviews: CreateReviewsDto) {
    const book = await this.bookRepo.findOne({ where: { id: bookId } });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    let user = await this.userRepo.findOne({ where: { name: reviews.name } });
    if (!user) {
      user = this.userRepo.create({ name: reviews.name });
      user = await this.userRepo.save(user);
    }

    const review = this.reviewRepo.create({
      book,
      user,
      rating: reviews.rating,
      comment: reviews.comment,
    });

    return await this.reviewRepo.save(review);
  }

  async GetAllReviews() {
    try {
      const reviews = await this.reviewRepo.find({
        relations: ['user'],
      });
      if (!reviews || reviews.length === 0) {
        throw new NotFoundException('No reviews found');
      }

      return {
        statusCode: 200,
        message: 'Reviews retrieved successfully',
        data: reviews,
      };
    } catch (err) {
      console.error('Error retrieving reviews:', err);
      throw err;
    }
  }
}
