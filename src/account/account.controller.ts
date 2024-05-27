import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    await this.accountService.create(createAccountDto);
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.accountService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    await this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.accountService.remove(+id);
  }
}
