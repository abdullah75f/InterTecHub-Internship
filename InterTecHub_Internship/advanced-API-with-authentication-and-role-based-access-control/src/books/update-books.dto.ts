import { CreateBookDto } from './create-books.dto';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBooksDto extends PartialType(CreateBookDto) {
  @ApiProperty({
    description: 'The title of the book',
    example: 'The Great Gatsby',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description:
      'The ISBN number of the book. It can be either 10 or 13 digits.',
    example: '9783161484100',
    required: false,
  })
  isbn?: string;

  @ApiProperty({
    description: 'Author of the book',
    example: 'F. Scott Fitzgerald',
    required: false,
  })
  author?: string;

  @ApiProperty({
    description: 'The year the book was published',
    example: 1925,
    required: false,
  })
  publishedYear?: number;
}
