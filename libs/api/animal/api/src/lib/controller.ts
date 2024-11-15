import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ZodSchema } from 'zod';
import { Repository } from '@demo-vue-nestjs/api/animal/repository';

export abstract class AbstractController<TYPE, DTO_TYPE> {
  protected abstract readonly schema: ZodSchema<TYPE>;
  protected abstract readonly formSchema: any;

  protected constructor(protected readonly repository: Repository<TYPE>) {}

  @Get('schema')
  getSchema() {
    return this.formSchema.detailForm;
  }

  @Post()
  async create(@Body() body: DTO_TYPE) {
    return this.repository.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: DTO_TYPE) {
    return this.repository.update(Number(id), body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.repository.delete(Number(id));
  }

  @Get()
  async list(): Promise<TYPE[]> {
    return this.repository.list();
  }
}
