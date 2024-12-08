import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewsDto } from './create-reviews.dto';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';
import { RolesGuard } from 'src/users/roles.guards';
import { Roles } from 'src/users/roles';
import { Role } from 'src/users/role.enum';
import { User } from 'src/users/user.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  // This End-point creates a review on a book if the user is Authorized
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post('/:bookId')
  CreateReview(
    @Param('bookId') bookId: string,
    @Body() body: CreateReviewsDto,
    @Request() req,
  ) {
    const userId = req.user.id;
    return this.reviewsService.CreateReview(parseInt(bookId), body, userId);
  }

  // This End-point gets all reviews an Authorized user created
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get()
  GetAllBooksReviews(@Request() req) {
    const userId = req.user.id;
    return this.reviewsService.GetAllReviews(userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('recommendations')
  async GetRecommendations(@Request() req) {
    const user: User = req.user; // Get the logged-in user
    return await this.reviewsService.GetBookRecommendations(user);
  }
}
