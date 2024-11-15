import { Module } from '@nestjs/common';
import { DogRepository } from './dog.repository';
import { PrismaService } from './prisma.service';
import { OwnerRepository } from './owner.repository';

@Module({
  controllers: [],
  providers: [DogRepository, OwnerRepository, PrismaService],
  exports: [DogRepository, OwnerRepository],
})
export class RepositoryModule {}
