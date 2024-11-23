"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const books_entity_1 = require("./books.entity");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("../reviews/review.entity");
const user_entity_1 = require("../users/user.entity");
let BooksService = class BooksService {
    constructor(bookRepo, reviewRepo, userRepo) {
        this.bookRepo = bookRepo;
        this.reviewRepo = reviewRepo;
        this.userRepo = userRepo;
    }
    async CreateBook(bookDto) {
        try {
            const book = this.bookRepo.create(bookDto);
            const storedBook = await this.bookRepo.save(book);
            return {
                statusCode: 201,
                message: 'Book created successfully',
                data: storedBook,
            };
        }
        catch (err) {
            return {
                statusCode: 400,
                message: err.message,
            };
        }
    }
    async GetAllBooks() {
        try {
            const books = await this.bookRepo.find();
            if (!books || books.length === 0) {
                throw new common_1.NotFoundException('No books found');
            }
            return {
                statusCode: 200,
                message: 'Books retrieved successfully',
                data: books,
            };
        }
        catch (err) {
            console.error('Error retrieving books:', err);
            throw err;
        }
    }
    async GetSingleBook(bookId) {
        try {
            const book = await this.bookRepo.findOne({ where: { id: bookId } });
            if (!book) {
                throw new common_1.NotFoundException('No book is found');
            }
            return {
                statusCode: 200,
                message: 'Books retrieved successfully',
                data: book,
            };
        }
        catch (err) {
            console.error('Error retrieving books:', err);
            throw err;
        }
    }
    async UpdateBook(bookId, updateBooks) {
        try {
            const book = await this.bookRepo.findOne({ where: { id: bookId } });
            if (!book) {
                throw new common_1.NotFoundException('No book is found');
            }
            Object.assign(book, updateBooks);
            return this.bookRepo.save(book);
        }
        catch (err) {
            console.error('Error updating books:', err);
            throw err;
        }
    }
    async DeleteBook(bookId) {
        try {
            const result = await this.bookRepo.delete({ id: bookId });
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Book with ID ${bookId} not found`);
            }
            return {
                statusCode: 200,
                message: `Book with ID ${bookId} deleted successfully`,
            };
        }
        catch (err) {
            console.error('Error deleting book:', err);
            throw err;
        }
    }
    async CreateReview(bookId, reviews) {
        const book = await this.bookRepo.findOne({ where: { id: bookId } });
        if (!book) {
            throw new common_1.NotFoundException('Book not found');
        }
        let user = await this.userRepo.findOne({ where: { name: reviews.name } });
        if (!user) {
            user = this.userRepo.create({ name: reviews.name });
            user = await this.userRepo.save(user);
        }
        const review = this.reviewRepo.create({
            book,
            user,
            rating: reviews.rating,
            comment: reviews.comment,
        });
        return await this.reviewRepo.save(review);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(books_entity_1.Book)),
    __param(1, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map