import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
  ) {}

  CreateBook(bookDto: CreateBookDto) {
    const book = this.bookRepo.create(bookDto);
    return this.bookRepo.save(book);
  }

  GetAllBooks() {}

  GetSingleBook() {}

  UpdateBook() {}

  DeleteBook() {}

  CreateReview() {}
}
