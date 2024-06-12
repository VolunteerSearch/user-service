import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<void> {
    const newAccount = new Account();
    newAccount.email = createAccountDto.email;
    newAccount.username = createAccountDto.username;
    newAccount.passwordHash = await argon2.hash(createAccountDto.password);
    await this.accountRepository.insert(newAccount);
  }

  async findAll(): Promise<Account[]> {
    const allAccounts = await this.accountRepository.find({});
    return allAccounts;
  }

  async findOne(id: number): Promise<Account> {
    return await this.accountRepository.findOneBy({
      id: id,
    });
  }

  async findOneByEmail(email: string): Promise<Account> {
    return await this.accountRepository.findOneBy({
      email: email,
    });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto): Promise<void> {
    await this.accountRepository.update(
      {
        id: id,
      },
      {
        username: updateAccountDto.username,
        email: updateAccountDto.email,
        passwordHash: await argon2.hash(updateAccountDto.password),
      },
    );
  }

  async remove(id: number): Promise<void> {
    await this.accountRepository.delete({
      id: id,
    });
  }
}
