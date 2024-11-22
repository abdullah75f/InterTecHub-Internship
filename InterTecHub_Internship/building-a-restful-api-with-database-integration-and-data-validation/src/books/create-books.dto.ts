import { IsString, IsInt, Min, Max, Matches } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @Matches(/^\d{10}(\d{3})?$/, {
    message: 'ISBN must be either 10 or 13 digits.',
  })
  isbn: string;

  @IsString()
  author: string;

  @IsInt()
  @Min(1500)
  @Max(new Date().getFullYear())
  publishedYear: number;
}
