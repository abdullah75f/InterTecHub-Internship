import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';
import { CreateReviewsDto } from '../reviews/create-reviews.dto';
import { Review } from '../reviews/review.entity';
import { User } from '../users/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async CreateBook(bookDto: CreateBookDto) {
    try {
      const book = this.bookRepo.create(bookDto);
      const storedBook = await this.bookRepo.save(book);

      return {
        statusCode: 201,
        message: 'Book created successfully',
        data: storedBook,
      };
    } catch (err) {
      return {
        statusCode: 400,
        message: (err as any).message,
      };
    }
  }

  async GetAllBooks() {
    try {
      const books = await this.bookRepo.find();
      if (!books || books.length === 0) {
        throw new NotFoundException('No books found');
      }

      return {
        statusCode: 200,
        message: 'Books retrieved successfully',
        data: books,
      };
    } catch (err) {
      console.error('Error retrieving books:', err);
      throw err;
    }
  }

  async GetSingleBook(bookId: number) {
    try {
      const book = await this.bookRepo.findOne({ where: { id: bookId } });

      if (!book) {
        throw new NotFoundException('No book is found');
      }

      return {
        statusCode: 200,
        message: 'Books retrieved successfully',
        data: book,
      };
    } catch (err) {
      console.error('Error retrieving books:', err);
      throw err;
    }
  }

  async UpdateBook(bookId: number, updateBooks: UpdateBooksDto) {
    try {
      const book = await this.bookRepo.findOne({ where: { id: bookId } });

      if (!book) {
        throw new NotFoundException('No book is found');
      }
      Object.assign(book, updateBooks);
      return this.bookRepo.save(book);
    } catch (err) {
      console.error('Error updating books:', err);
      throw err;
    }
  }

  async DeleteBook(bookId: number) {
    try {
      const result = await this.bookRepo.delete({ id: bookId });
      if (result.affected === 0) {
        throw new NotFoundException(`Book with ID ${bookId} not found`);
      }

      return {
        statusCode: 200,
        message: `Book with ID ${bookId} deleted successfully`,
      };
    } catch (err) {
      console.error('Error deleting book:', err);
      throw err;
    }
  }

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
}
