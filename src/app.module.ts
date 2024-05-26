import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { AccountModule } from './account/account.module';
import { env } from 'process';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE_NAME,
      entities: [],
      synchronize: true,
    }),
    ProfileModule,
    AccountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
