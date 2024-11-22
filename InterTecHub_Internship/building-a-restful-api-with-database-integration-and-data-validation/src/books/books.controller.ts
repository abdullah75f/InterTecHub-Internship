import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
    return this.booksService.GetAllBooks;
  }

  @Get(':bookId')
  GetSingleBook() {
    return this.booksService.GetSingleBook();
  }

  @Put(':bookId')
  UpdateBook() {
    return this.booksService.UpdateBook();
  }

  @Delete(':bookId')
  DeleteBook() {
    return this.booksService.DeleteBook();
  }

  @Post(':bookId/reviews')
  CreateReview() {
    return this.booksService.CreateReview();
  }
}
