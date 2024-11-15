import { PrismaService } from './prisma.service';

export abstract class Repository<TYPE> {
  constructor(protected prisma: PrismaService) {}

  async create(data: any): Promise<TYPE> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, data: any): Promise<TYPE> {
    throw new Error('Method not implemented.');
  }

  async delete(id: any): Promise<TYPE> {
    throw new Error('Method not implemented.');
  }

  async list(): Promise<TYPE[]> {
    throw new Error('Method not implemented.');
  }
}
