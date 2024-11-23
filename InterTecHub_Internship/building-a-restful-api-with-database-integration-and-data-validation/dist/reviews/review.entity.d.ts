import { Book } from '../books/books.entity';
import { User } from '../users/user.entity';
export declare class Review {
    id: number;
    rating: number;
    comment: string;
    createdAT: Date;
    book: Book;
    user: User;
}
