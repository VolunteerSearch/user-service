import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Genders } from "../enums/genders";


@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  age: number

  @Column({ nullable: true, default: Genders.NOT_SPECIFIED })
  gender: Genders

  @Column({ nullable: true })
  pronounces: string[]

  @Column({ nullable: true })
  profilePicture: string

  @Column({ length: 1500 })
  bio: string

  @Column()
  location: string

  @Column()
  country: string

}