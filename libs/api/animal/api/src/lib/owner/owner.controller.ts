import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { OwnerRepository } from '@demo-vue-nestjs/api/animal/repository';
import { OwnerForm, OwnerSchema } from '@demo-vue-nestjs/model';
import { OwnerDto } from './owner.dto';
import { ZodValidationPipe } from 'nestjs-zod';

@UsePipes(ZodValidationPipe)
@Controller('owner')
export class OwnerController {
  protected readonly schema = OwnerSchema;
  protected readonly formSchema = OwnerForm;

  constructor(private readonly repository: OwnerRepository) {}

  @Get('schema')
  getSchema() {
    return this.formSchema.detailForm;
  }

  @Post()
  async create(@Body() body: OwnerDto) {
    delete (body as any).id;
    return this.repository.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: OwnerDto) {
    return this.repository.update(Number(id), body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.repository.delete(Number(id));
  }

  @Get()
  async list(): Promise<OwnerDto[]> {
    return this.repository.list();
  }
}
