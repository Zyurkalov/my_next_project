import { Module } from '@nestjs/common';
import { OthersController } from './others.controller';

@Module({
  controllers: [OthersController]
})
export class OthersModule {}
