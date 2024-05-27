import { IsNotEmpty, IsNumber, IsArray, Length, IsEnum } from "class-validator";
import { Genders } from "../enums/genders";

export class CreateProfileDto {

  @IsNotEmpty()
  name: string

  @IsNumber({ allowInfinity: false, allowNaN: false })
  age: number

  @IsEnum(Genders)
  gender: number

  @IsArray()
  pronounces: string[]

  profilePicture: string

  @Length(20, 1500)
  bio: string

  @IsNotEmpty()
  location: string

  @IsNotEmpty()
  country: string

}
