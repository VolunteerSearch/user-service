import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateAccountDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  username: string

  @IsStrongPassword()
  password: string
}
