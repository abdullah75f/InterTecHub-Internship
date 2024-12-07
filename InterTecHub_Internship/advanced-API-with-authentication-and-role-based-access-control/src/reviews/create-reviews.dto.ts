import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateReviewsDto {
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @IsNotEmpty()
  comment: string;
}
