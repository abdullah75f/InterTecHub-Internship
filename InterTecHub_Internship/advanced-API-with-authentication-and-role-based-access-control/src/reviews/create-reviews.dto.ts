import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateReviewsDto {
  @ApiProperty({
    description: 'Rating of the book, between 1 and 5',
    example: 4,
    minimum: 1,
    maximum: 5,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    description: 'The comment about the book',
    example: 'An excellent read, very engaging.',
  })
  @IsString()
  @IsNotEmpty()
  comment: string;
}
