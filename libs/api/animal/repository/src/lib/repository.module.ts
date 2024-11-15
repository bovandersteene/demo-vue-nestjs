import { Module } from '@nestjs/common';
import { DogRepository } from './dog.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [],
  providers: [DogRepository, PrismaService],
  exports: [DogRepository],
})
export class RepositoryModule {}
