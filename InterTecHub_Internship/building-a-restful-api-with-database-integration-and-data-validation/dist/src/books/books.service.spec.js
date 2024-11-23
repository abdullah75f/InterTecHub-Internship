"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const books_service_1 = require("./books.service");
describe('BooksService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [books_service_1.BooksService],
        }).compile();
        service = module.get(books_service_1.BooksService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=books.service.spec.js.map