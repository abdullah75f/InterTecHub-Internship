import {
  IsString,
  IsInt,
  Min,
  Max,
  Matches,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'Title of the book',
    example: 'Clean Code',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'ISBN of the book (10 or 13 digits)',
    example: '1234567890123',
  })
  @IsNotEmpty()
  @Matches(/^\d{10}(\d{3})?$/, {
    message: 'ISBN must be either 10 or 13 digits string.',
  })
  isbn: string;

  @ApiProperty({
    description: 'Author of the book',
    example: 'Robert C. Martin',
  })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    description: 'Year the book was published',
    example: 2008,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1500)
  @Max(new Date().getFullYear())
  publishedYear: number;
}
