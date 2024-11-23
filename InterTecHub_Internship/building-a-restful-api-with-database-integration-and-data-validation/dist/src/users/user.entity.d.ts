import { Review } from '../reviews/review.entity';
export declare class User {
    id: number;
    name: string;
    createdAt: Date;
    reviews: Review[];
}
