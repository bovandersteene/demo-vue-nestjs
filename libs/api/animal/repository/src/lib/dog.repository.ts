import { Injectable } from '@nestjs/common';
import { Dog } from '@demo-vue-nestjs/prisma-client';
import { Repository } from './repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class DogRepository extends Repository<Dog> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  override async create(data: any): Promise<Dog> {
    return this.prisma.dog.create({
      data,
    });
  }

  override async update(id: number, data: any): Promise<Dog> {
    return this.prisma.dog.update({
      where: {
        id,
      },
      data,
    });
  }

  override async delete(id: number): Promise<Dog> {
    return this.prisma.dog.delete({
      where: {
        id,
      },
    });
  }

  override async list(): Promise<Dog[]> {
    return this.prisma.dog.findMany();
  }
}
