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
import { UpdateBooksDto } from './update-books.dto';

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
  GetSingleBook(@Param('bookId') bookId: string) {
    return this.booksService.GetSingleBook(parseInt(bookId));
  }

  @Put('/:bookId')
  UpdateBook(@Param('bookId') bookId: string, @Body() body: UpdateBooksDto) {
    return this.booksService.UpdateBook(parseInt(bookId), body);
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
