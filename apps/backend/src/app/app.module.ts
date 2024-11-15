import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from '@demo-vue-nestjs/api/animal/api';
import { ZodValidationPipe } from 'nestjs-zod';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_PIPE,
    useClass: ZodValidationPipe,
  },],
})
export class AppModule {}
