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
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  //This End-point creates a new book , if the User is only Authenticated and have the role of "user"
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post()
  @ApiOperation({ summary: 'creates a new book' })
  @ApiOkResponse({ description: 'Book is created  successfully' })
  @ApiNotFoundResponse({ description: 'Invalid data provided' })
  CreateBook(@Body() body: CreateBookDto, @Request() req) {
    const user: User = req.user;
    return this.booksService.CreateBook(body, user);
  }

  //This End-point Lists all the books created, if the User is only Authenticated and have the role of "admin"
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get()
  @ApiOperation({ summary: 'Fetch a list of books' })
  @ApiOkResponse({ description: 'List of books fetched  successfully' })
  @ApiNotFoundResponse({ description: 'Books Not Found' })
  GetAllBooks() {
    return this.booksService.GetAllBooks();
  }

  // This End-point gets a single book to the same user that created it .
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('/:bookId')
  @ApiOperation({ summary: 'Fetch a single of books' })
  @ApiOkResponse({ description: 'a book is fetched  successfully' })
  @ApiNotFoundResponse({ description: 'Book Not Found' })
  GetSingleBook(@Param('bookId') bookId: string, @Request() req) {
    const user: User = req.user;
    return this.booksService.GetSingleBook(parseInt(bookId), user);
  }

  // This End-point updates a single book if the  user that created it is trying to update.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Put('/:bookId')
  @ApiOperation({ summary: 'Updates a book' })
  @ApiOkResponse({ description: 'Book is updated  successfully' })
  @ApiNotFoundResponse({ description: 'Invalid data provided' })
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
  @ApiOperation({ summary: 'deletes a book' })
  @ApiOkResponse({ description: 'Book is deleted  successfully' })
  DeleteBook(@Param('bookId') bookId: string, @Request() req: any) {
    const user: User = req.user;
    return this.booksService.DeleteBook(parseInt(bookId), user);
  }

  // This End-point selects a favorite-books of the user
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post('/favorite')
  @ApiOperation({ summary: 'a favorite-books of the user is selected' })
  @ApiOkResponse({ description: 'favorite is created  successfully' })
  @ApiNotFoundResponse({ description: 'Invalid data provided' })
  async AddFavorite(@Body('bookId') bookId: number, @Request() req) {
    const userId = req.user.userId;
    return this.booksService.AddFavorite(userId, bookId);
  }
}
