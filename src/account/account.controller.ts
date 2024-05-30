import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto, @Res() response: Response) {
    try{
      await this.accountService.create(createAccountDto);
      return response.status(201);
    } catch(e: any) {
      if (e instanceof QueryFailedError) {
        console.log(e);
        return response.status(400);
      }
      throw e;
    }
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.accountService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    await this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.accountService.remove(+id);
  }
}
