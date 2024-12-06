import {
  IsString,
  IsInt,
  Min,
  Max,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Matches(/^\d{10}(\d{3})?$/, {
    message: 'ISBN must be either 10 or 13 digits string.',
  })
  isbn: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1500)
  @Max(new Date().getFullYear())
  publishedYear: number;
}
