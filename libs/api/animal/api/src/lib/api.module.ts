import { Module } from '@nestjs/common';
import { DogController } from './dog/dog.controller';
import { RepositoryModule } from '@demo-vue-nestjs/api/animal/repository';
import { OwnerController } from './owner/owner.controller';

@Module({
  controllers: [DogController, OwnerController],
  providers: [],
  exports: [],
  imports: [RepositoryModule],
})
export class ApiModule {}
