import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { Review } from './reviews/review.entity';
import { Book } from './books/books.entity';
import { User } from './users/user.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Path to static files
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        username: configService.get<string>('abdullah75farid'), // Set your username
        password: configService.get<string>('my_p@ssw0rd'), // Set your password
        database: configService.get<string>('books'),
        // url: configService.get<string>('DATABASE_URL'),
        port: 5432,
        // ssl: { rejectUnauthorized: false },
        // autLoadEntities: true,
        entities: [User, Book, Review],
        synchronize: true,
      }),
    }),
    UsersModule,
    BooksModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
