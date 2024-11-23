"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const books_controller_1 = require("./books.controller");
describe('BooksController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [books_controller_1.BooksController],
        }).compile();
        controller = module.get(books_controller_1.BooksController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=books.controller.spec.js.map