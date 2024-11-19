import { Injectable } from '@nestjs/common';
import { Repository } from './repository';
import { PrismaService } from './prisma.service';
import { Owner } from '@demo-vue-nestjs/prisma-client';

@Injectable()
export class OwnerRepository extends Repository<Owner> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  override async create(data: any): Promise<Owner> {
    return this.prisma.owner.create({
      data: {
        ...data,
        emails: { create: data.emails },
        addresses: { create: data.addresses ?? [] },
      },
    });
  }

  override async update(id: number, data: any): Promise<Owner> {
    return this.prisma.owner.update({
      where: {
        id,
      },
      data,
    });
  }

  override async delete(id: number): Promise<Owner> {
    return this.prisma.owner.delete({
      where: {
        id,
      },
    });
  }

  override async list(): Promise<Owner[]> {
    return this.prisma.owner.findMany({
      // relationLoadStrategy: 'join', // or 'query'
      include: {
        emails: true,
        addresses: true,
      },
    });
  }
}
