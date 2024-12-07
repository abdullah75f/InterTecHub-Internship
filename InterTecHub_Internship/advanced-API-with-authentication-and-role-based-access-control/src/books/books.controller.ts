import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './create-books.dto';
import { UpdateBooksDto } from './update-books.dto';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';
import { RolesGuard } from 'src/users/roles.guards';
import { Roles } from 'src/users/roles';
import { Role } from 'src/users/role.enum';
import { User } from 'src/users/user.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post()
  CreateBook(@Body() body: CreateBookDto, @Request() req) {
    const user: User = req.user;
    return this.booksService.CreateBook(body, user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get()
  GetAllBooks() {
    return this.booksService.GetAllBooks();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:bookId')
  GetSingleBook(@Param('bookId') bookId: string) {
    return this.booksService.GetSingleBook(parseInt(bookId));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put('/:bookId')
  UpdateBook(@Param('bookId') bookId: string, @Body() body: UpdateBooksDto) {
    return this.booksService.UpdateBook(parseInt(bookId), body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete('/:bookId')
  DeleteBook(@Param('bookId') bookId: string) {
    return this.booksService.DeleteBook(parseInt(bookId));
  }
}
