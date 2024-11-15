import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { DogDto } from './dog.dto';
import { DogRepository } from '@demo-vue-nestjs/api/animal/repository';
import { DogForm, DogSchema } from '@demo-vue-nestjs/model';

@Controller('dog')
export class DogController {
  protected readonly schema = DogSchema;
  protected readonly formSchema = DogForm;

  constructor(private readonly repository: DogRepository) {}

  @Get('schema')
  getSchema() {
    return this.formSchema.detailForm;
  }

  @Post()
  async create(@Body() body: DogDto) {
    delete (body as any).id;
    return this.repository.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: DogDto) {
    return this.repository.update(Number(id), body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.repository.delete(Number(id));
  }

  @Get()
  async list(): Promise<DogDto[]> {
    return this.repository.list();
  }
}