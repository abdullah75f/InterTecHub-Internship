import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/books.entity';
import { In, Repository } from 'typeorm';
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

  async CreateReview(
    bookId: number,
    reviews: CreateReviewsDto,
    userId: number,
  ) {
    const book = await this.bookRepo.findOne({ where: { id: bookId } });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('User not found or unauthorized');
    }

    const review = this.reviewRepo.create({
      book: { id: bookId },
      user: { id: userId },
      rating: reviews.rating,
      comment: reviews.comment,
    });

    return await this.reviewRepo.save(review);
  }

  async GetAllReviews(userId: number) {
    try {
      const reviews = await this.reviewRepo.find({
        where: { user: { id: userId } },
        relations: ['user', 'book'],
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

  async GetBookRecommendations(user: User) {
    const userReviews = await this.reviewRepo.find({
      where: { user: { id: user.id } },
      relations: ['book'],
    });

    if (!userReviews || userReviews.length === 0) {
      throw new NotFoundException('No reviews found for this user');
    }

    const authors = userReviews.map((review) => review.book.author);
    const recommendedBooks = await this.bookRepo.find({
      where: {
        author: In(authors),
      },
    });

    if (!recommendedBooks || recommendedBooks.length === 0) {
      throw new NotFoundException('No recommendations found');
    }

    return recommendedBooks;
  }
}
