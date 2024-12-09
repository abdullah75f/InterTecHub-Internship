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
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('reviews')
@ApiBearerAuth()
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  // This End-point creates a review on a book if the user is Authorized
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post('/:bookId')
  @ApiOperation({ summary: 'Creates a review for a book' })
  @ApiOkResponse({ description: 'Review is created successfully' })
  @ApiParam({ name: 'bookId', type: String, description: 'ID of the book' })
  @ApiBody({ type: CreateReviewsDto })
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
  @ApiOperation({ summary: 'Fetch all reviews created by the user' })
  @ApiOkResponse({ description: 'List of reviews fetched successfully' })
  GetAllBooksReviews(@Request() req) {
    const userId = req.user.id;
    return this.reviewsService.GetAllReviews(userId);
  }

  // This endpoint retrieves book recommendations for the authenticated user based on the authors of the books they have reviewed.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('recommendations')
  @ApiOperation({ summary: 'Fetch book recommendations based on reviews' })
  @ApiOkResponse({
    description: 'List of recommended books fetched successfully',
  })
  async GetRecommendations(@Request() req) {
    const user: User = req.user;
    return await this.reviewsService.GetBookRecommendations(user);
  }
}
