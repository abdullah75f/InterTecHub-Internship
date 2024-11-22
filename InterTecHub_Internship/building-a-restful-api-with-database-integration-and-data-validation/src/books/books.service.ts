import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
  ) {}

  CreateBook(bookDto: CreateBookDto) {
    const book = this.bookRepo.create(bookDto);
    return this.bookRepo.save(book);
  }

  async GetAllBooks() {
    return await this.bookRepo.find();
  }

  GetSingleBook() {}

  async UpdateBook(bookId, updateBooks: UpdateBooksDto) {
    const book = await this.bookRepo.findOne(bookId);
    Object.assign(book, updateBooks);
    return this.bookRepo.save(book);
 
  }

  DeleteBook() {}

  CreateReview() {}
}
