import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';
import { CreateReviewsDto } from 'src/reviews/create-reviews.dto';
import { Review } from 'src/reviews/review.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  CreateBook(bookDto: CreateBookDto) {
    const book = this.bookRepo.create(bookDto);
    return this.bookRepo.save(book);
  }

  async GetAllBooks() {
    return await this.bookRepo.find();
  }

  async GetSingleBook(bookId: number) {
    return await this.bookRepo.findOne({ where: { id: bookId } });
  }

  async UpdateBook(bookId: number, updateBooks: UpdateBooksDto) {
    const book = await this.bookRepo.findOne({ where: { id: bookId } });
    Object.assign(book, updateBooks);
    return this.bookRepo.save(book);
  }

  async DeleteBook(bookId: number) {
    return await this.bookRepo.delete(bookId);
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
