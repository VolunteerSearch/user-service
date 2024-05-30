import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { AccountModule } from './account/account.module';
import { env } from 'process';
import { Account } from './account/entities/account.entity';
import { Profile } from './profile/entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mariadb',
      port: 3306,
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE_NAME,
      entities: [Account, Profile],
      synchronize: true,
    }),
    ProfileModule,
    AccountModule,
  ],
})
export class AppModule {}
