import { PrismaService } from './prisma.service';

export abstract class Repository<TYPE> {
  protected constructor(protected prisma: PrismaService) {}

  async create(data: any): Promise<TYPE> {
    return data;
  }

  async update(id: number, data: any): Promise<TYPE> {
    return data;
  }

  async delete(id: any): Promise<TYPE> {
    return { id } as TYPE;
  }

  async list(): Promise<TYPE[]> {
    return [];
  }
}
