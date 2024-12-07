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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post('/:bookId')
  CreateReview(
    @Param('bookId') bookId: string,
    @Body() body: CreateReviewsDto,
    @Request() req,
  ) {
    const userId = req.user.userId;
    return this.reviewsService.CreateReview(parseInt(bookId), body, userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get()
  GetAllBooksReviews() {
    return this.reviewsService.GetAllReviews();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('recommendations')
  async GetRecommendations(@Request() req) {
    const user: User = req.user; // Get the logged-in user
    return await this.reviewsService.GetBookRecommendations(user);
  }
}
