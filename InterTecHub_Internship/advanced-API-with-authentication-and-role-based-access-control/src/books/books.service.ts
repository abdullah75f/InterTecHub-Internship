import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';
import { CreateReviewsDto } from '../reviews/create-reviews.dto';
import { Review } from '../reviews/review.entity';
import { User } from '../users/user.entity';
import { Favorite } from './favorite.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Favorite)
    private readonly favoriteRepo: Repository<Favorite>,
  ) {}

  async CreateBook(bookDto: CreateBookDto, user: User) {
    try {
      const existingUser = await this.userRepo.findOne({
        where: { id: user.id },
      });

      if (!existingUser) {
        return {
          statusCode: 400,
          message: 'User does not exist.',
        };
      }

      const book = this.bookRepo.create({
        ...bookDto,
        user: existingUser,
      });

      const storedBook = await this.bookRepo.save(book);

      return {
        statusCode: 201,
        message: 'Book created successfully',
        data: storedBook,
      };
    } catch (err) {
      console.error('Error creating book:', err);
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

  async GetSingleBook(bookId: number, user: User) {
    try {
      const book = await this.bookRepo.findOne({
        where: { id: bookId, user: { id: user.id } },
        relations: ['user'],
      });

      if (!book) {
        throw new NotFoundException(
          'No book found or you do not have access to this book',
        );
      }

      return {
        statusCode: 200,
        message: 'Book retrieved successfully',
        data: book,
      };
    } catch (err) {
      console.error('Error retrieving book:', err);
      throw err;
    }
  }
  async GetBooksByUser(userId: number) {
    try {
      const books = await this.bookRepo.find({
        where: { user: { id: userId } },
        relations: ['user'],
      });

      if (!books || books.length === 0) {
        throw new NotFoundException('No books found for this user');
      }

      return {
        statusCode: 200,
        message: 'Books retrieved successfully',
        data: books,
      };
    } catch (err) {
      console.error('Error retrieving books by user:', err);
      throw err;
    }
  }

  async UpdateBook(bookId: number, updateBooks: UpdateBooksDto, user: User) {
    try {
      const book = await this.bookRepo.findOne({
        where: { id: bookId, user: { id: user.id } },
      });

      if (!book) {
        throw new NotFoundException(
          'No book found or you do not have access to update this book',
        );
      }

      Object.assign(book, updateBooks);
      return this.bookRepo.save(book);
    } catch (err) {
      console.error('Error updating book:', err);
      throw err;
    }
  }

  async DeleteBook(bookId: number, user: User) {
    try {
      const book = await this.bookRepo.findOne({
        where: { id: bookId, user: { id: user.id } },
      });

      if (!book) {
        throw new NotFoundException(
          'No book found or you do not have access to delete this book',
        );
      }

      await this.bookRepo.delete({ id: bookId });

      return {
        statusCode: 200,
        message: `Book with ID ${bookId} deleted successfully`,
      };
    } catch (err) {
      console.error('Error deleting book:', err);
      throw err;
    }
  }

  async AddFavorite(userId: number, bookId: number) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    const book = await this.bookRepo.findOne({ where: { id: bookId } });

    if (!user || !book) {
      throw new Error('User or Book not found');
    }

    const existingFavorite = await this.favoriteRepo.findOne({
      where: { user: { id: userId }, book: { id: bookId } },
    });

    if (existingFavorite) {
      throw new Error('Book is already in favorites');
    }

    const favorite = this.favoriteRepo.create({ user, book });
    return this.favoriteRepo.save(favorite);
  }
}
