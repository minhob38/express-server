import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../repo/users.entity';

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
    const user = await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({ email, password: hash })
      .returning('*')
      .execute();
    console.log(user);
    return user;
  }
}
