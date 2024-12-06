import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewsDto } from './create-reviews.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post('/:bookId')
  CreateReview(
    @Param('bookId') bookId: string,
    @Body() body: CreateReviewsDto,
  ) {
    return this.reviewsService.CreateReview(parseInt(bookId), body);
  }

  @Get()
  GetAllBooksReviews() {
    return this.reviewsService.GetAllReviews();
  }
}
