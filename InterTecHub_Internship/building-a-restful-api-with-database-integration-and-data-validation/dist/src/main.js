"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_1 = require("http");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.init();
    server = (0, http_1.createServer)((req, res) => {
        app.getHttpAdapter().getInstance()(req, res);
    });
}
exports.default = async (req, res) => {
    if (!server) {
        await bootstrap();
    }
    server.emit('request', req, res);
};
//# sourceMappingURL=main.js.map