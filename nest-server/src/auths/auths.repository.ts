import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';

@Injectable()
export class AuthsRepository {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user;
  }

  async createUser(email: string, hash: string) {
    const inserted = await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({ email, password: hash })
      .returning('*')
      .execute();
    return inserted;
  }

  async updatePassword(email: string, password: string) {
    const updated = await this.usersRepository
      .createQueryBuilder()
      .update(Users)
      .set({ password })
      .where({ email })
      .returning('*')
      .execute();
    return updated;
  }
}
