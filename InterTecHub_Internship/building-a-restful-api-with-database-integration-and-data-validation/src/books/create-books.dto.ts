import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(1000000000000)
  @Max(9999999999999)
  isbn: number;

  @IsString()
  author: string;

  @IsInt()
  @Min(1500)
  @Max(new Date().getFullYear())
  publishedYear: number;
}
