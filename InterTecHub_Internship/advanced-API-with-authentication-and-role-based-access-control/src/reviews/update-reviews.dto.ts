import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewsDto } from './create-reviews.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewsDto extends PartialType(CreateReviewsDto) {
  @ApiProperty({
    description: 'Rating of the book, between 1 and 5 (optional for update)',
    example: 4,
    minimum: 1,
    maximum: 5,
    required: false,
  })
  rating?: number;

  @ApiProperty({
    description: 'The comment about the book (optional for update)',
    example: 'A must-read for anyone interested in technology.',
    required: false,
  })
  comment?: string;
}
