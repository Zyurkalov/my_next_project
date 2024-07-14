import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { OthersModule } from './others/others.module';

@Module({
  imports: [OrdersModule, UsersModule, OthersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
