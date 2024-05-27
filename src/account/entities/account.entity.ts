import { Profile } from "src/profile/entities/profile.entity";  // TODO: Can I do something about such imports?
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Account {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  username: string

  @Column()
  passwordHash: string

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile

}
