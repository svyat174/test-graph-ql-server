import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
