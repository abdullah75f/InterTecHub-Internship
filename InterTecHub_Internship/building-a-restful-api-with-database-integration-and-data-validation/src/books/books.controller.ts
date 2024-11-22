import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    //for books
    @Post()
    CreateBook()=>{
        return this.BooksService.CreateBook()
    }

    @Get()
    GetAllBooks()=>{
        return this.BooksService.GetAllBooks
    }

    // for specific book
    @Get(':bookId')
    GetSingleBook ()=>{
        return this.BooksService.GetSingleBook()
    }

    @Put(':bookId')
    UpdateBooks ()=>{
        return this.BooksService.UpdateBooks()
    }

    @Delete(':bookId')
    DeleteBooks () =>{
        return this.BooksService.DeleteBooks()

    }

    // my custom endpoint
    @Post(':bookId/reviews')
    CreateReviews () =>{
        return this.BooksService.CreateReviews()

    }
}
