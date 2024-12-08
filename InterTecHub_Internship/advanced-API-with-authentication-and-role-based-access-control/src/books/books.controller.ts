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
import { log } from 'console';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  //This End-point creates a new book , if the User is only Authenticated and have the role of "user"
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post()
  CreateBook(@Body() body: CreateBookDto, @Request() req) {
    const user: User = req.user;
    return this.booksService.CreateBook(body, user);
  }

  //This End-point Lists all the books created, if the User is only Authenticated and have the role of "admin"
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get()
  GetAllBooks() {
    return this.booksService.GetAllBooks();
  }

  // This End-point gets a single book to the same user that created it .
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('/:bookId')
  GetSingleBook(@Param('bookId') bookId: string, @Request() req) {
    const user: User = req.user;
    return this.booksService.GetSingleBook(parseInt(bookId), user);
  }

  // This End-point updates a single book if the  user that created it is trying to update.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Put('/:bookId')
  UpdateBook(
    @Param('bookId') bookId: string,
    @Body() body: UpdateBooksDto,
    @Request() req: any,
  ) {
    const user: User = req.user;
    return this.booksService.UpdateBook(parseInt(bookId), body, user);
  }

  // This End-point deletes a single book if the  user that created it is trying to delete.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Delete('/:bookId')
  DeleteBook(@Param('bookId') bookId: string, @Request() req: any) {
    const user: User = req.user;
    return this.booksService.DeleteBook(parseInt(bookId), user);
  }

  // This End-point selects a favorite-books of the user
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post('/favorite')
  async AddFavorite(@Body('bookId') bookId: number, @Request() req) {
    const userId = req.user.userId;
    return this.booksService.AddFavorite(userId, bookId);
  }
}
