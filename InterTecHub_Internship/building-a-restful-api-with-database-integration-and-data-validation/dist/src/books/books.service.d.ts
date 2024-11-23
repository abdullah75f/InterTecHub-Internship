import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';
import { CreateReviewsDto } from '../reviews/create-reviews.dto';
import { Review } from '../reviews/review.entity';
import { User } from '../users/user.entity';
export declare class BooksService {
    private readonly bookRepo;
    private readonly reviewRepo;
    private readonly userRepo;
    constructor(bookRepo: Repository<Book>, reviewRepo: Repository<Review>, userRepo: Repository<User>);
    CreateBook(bookDto: CreateBookDto): Promise<{
        statusCode: number;
        message: string;
        data: Book;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    GetAllBooks(): Promise<{
        statusCode: number;
        message: string;
        data: Book[];
    }>;
    GetSingleBook(bookId: number): Promise<{
        statusCode: number;
        message: string;
        data: Book;
    }>;
    UpdateBook(bookId: number, updateBooks: UpdateBooksDto): Promise<Book>;
    DeleteBook(bookId: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    CreateReview(bookId: number, reviews: CreateReviewsDto): Promise<Review>;
}
