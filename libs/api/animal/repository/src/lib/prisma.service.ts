import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@demo-vue-nestjs/prisma-client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
