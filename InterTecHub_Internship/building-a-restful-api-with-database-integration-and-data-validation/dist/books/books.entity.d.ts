import { Review } from "../reviews/review.entity";
export declare class Book {
    id: number;
    title: string;
    isbn: string;
    author: string;
    publishedYear: number;
    createdAt: Date;
    reviews: Review[];
}
