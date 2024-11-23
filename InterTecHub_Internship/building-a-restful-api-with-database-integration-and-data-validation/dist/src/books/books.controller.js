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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_books_dto_1 = require("./create-books.dto");
const update_books_dto_1 = require("./update-books.dto");
const create_reviews_dto_1 = require("../reviews/create-reviews.dto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    CreateBook(body) {
        return this.booksService.CreateBook(body);
    }
    GetAllBooks() {
        return this.booksService.GetAllBooks();
    }
    GetSingleBook(bookId) {
        return this.booksService.GetSingleBook(parseInt(bookId));
    }
    UpdateBook(bookId, body) {
        return this.booksService.UpdateBook(parseInt(bookId), body);
    }
    DeleteBook(bookId) {
        return this.booksService.DeleteBook(parseInt(bookId));
    }
    CreateReview(bookId, body) {
        return this.booksService.CreateReview(parseInt(bookId), body);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_books_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "CreateBook", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "GetAllBooks", null);
__decorate([
    (0, common_1.Get)('/:bookId'),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "GetSingleBook", null);
__decorate([
    (0, common_1.Put)('/:bookId'),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_books_dto_1.UpdateBooksDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "UpdateBook", null);
__decorate([
    (0, common_1.Delete)('/:bookId'),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "DeleteBook", null);
__decorate([
    (0, common_1.Post)('/:bookId/reviews'),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_reviews_dto_1.CreateReviewsDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "CreateReview", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map