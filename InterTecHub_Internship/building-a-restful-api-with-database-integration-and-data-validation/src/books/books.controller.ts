import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './create-books.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  CreateBook(@Body() body: CreateBookDto) {
    return this.booksService.CreateBook(body);
  }

  @Get()
  GetAllBooks() {
    return this.booksService.GetAllBooks();
  }

  @Get('/:bookId')
  GetSingleBook() {
    return this.booksService.GetSingleBook();
  }

  @Put('/:bookId')
  UpdateBook(@Param('bookId') bookId: string) {
    return this.booksService.UpdateBook();
  }

  @Delete('/:bookId')
  DeleteBook(@Param('bookId') bookId: string) {
    return this.booksService.DeleteBook();
  }

  @Post('/:bookId/reviews')
  CreateReview(@Param('bookId') bookId: string) {
    return this.booksService.CreateReview();
  }
}
