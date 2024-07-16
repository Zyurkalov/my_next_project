import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

import { User } from './users/entity/user.entity';
import { UsersModule } from './users/users.module';
import { OthersModule } from './others/others.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

config();

@Module({
  imports: [OrdersModule, UsersModule, OthersModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.HOST,
    //   port: Number(process.env.PORT) | 5432,
    //   username: process.env.USER,
    //   password: process.env.PASWORD,
    //   database: process.env.DATABASE,
    //   entities: [User],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'gjhjkm',
      database: 'nest_project',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
