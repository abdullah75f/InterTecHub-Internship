import { BooksService } from './books.service';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';
import { CreateReviewsDto } from '../reviews/create-reviews.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    CreateBook(body: CreateBookDto): Promise<{
        statusCode: number;
        message: string;
        data: import("./books.entity").Book;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    GetAllBooks(): Promise<{
        statusCode: number;
        message: string;
        data: import("./books.entity").Book[];
    }>;
    GetSingleBook(bookId: string): Promise<{
        statusCode: number;
        message: string;
        data: import("./books.entity").Book;
    }>;
    UpdateBook(bookId: string, body: UpdateBooksDto): Promise<import("./books.entity").Book>;
    DeleteBook(bookId: string): Promise<{
        statusCode: number;
        message: string;
    }>;
    CreateReview(bookId: string, body: CreateReviewsDto): Promise<import("../reviews/review.entity").Review>;
}
