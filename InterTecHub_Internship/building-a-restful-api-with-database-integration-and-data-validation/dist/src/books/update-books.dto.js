"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBooksDto = void 0;
const create_books_dto_1 = require("./create-books.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateBooksDto extends (0, mapped_types_1.PartialType)(create_books_dto_1.CreateBookDto) {
}
exports.UpdateBooksDto = UpdateBooksDto;
//# sourceMappingURL=update-books.dto.js.map