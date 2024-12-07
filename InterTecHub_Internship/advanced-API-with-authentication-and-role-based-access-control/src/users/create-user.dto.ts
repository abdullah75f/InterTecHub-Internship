import { IsEmail, IsIn, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsIn(['admin', 'user'], { message: 'Role must be either admin or user' })
  role: 'admin' | 'user';
}
