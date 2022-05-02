import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../repo/users.entity';

@Injectable()
export class AuthsService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUser(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    console.log(user);
    if (!user) return;

    const hash = this.createHash(password);
    // await this.saveUser(email, hash);
    const token = this.createToken(email);
  }

  // TODO: DB연동
  private async findUserByEmail(email: string) {
    // return this.usersRepository.findOne(email);
    return this.usersRepository.find();
  }

  private createHash(password: string) {
    return 'shdkjfhakjdhk';
  }

  private async saveUser(email: string, hash: string) {
    return this.usersRepository.save({ email, password: hash });
  }

  private createToken(email: string) {
    return 'token';
  }
}
