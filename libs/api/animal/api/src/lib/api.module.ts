import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { RepositoryModule } from '@demo-vue-nestjs/api/animal/repository';

@Module({
  controllers: [DogController],
  providers: [],
  exports: [],
  imports: [RepositoryModule],
})
export class ApiModule {}
