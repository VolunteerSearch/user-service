import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './profile/profile.module';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.entity';
import { Profile } from './profile/entities/profile.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mariadb',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [Account, Profile],
      synchronize: true,
    }),
    ProfileModule,
    AccountModule,
  ],
})
export class AppModule {}
