import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from 'types.dto';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  saveUser(user: UserDto) {
    this.usersRepository.save(user);
  }

  getUser(tgId: number) {
    return this.usersRepository.findOneOrFail({ where: { id: tgId } });
  }

  updateUser(user: UserDto) {
    console.log(user);
    const { id, ...lostParams } = _.pick(user, [
      'id',
      'firstName',
      'lastname',
      'isPremium',
      'languageCode',
      'photoUrl',
      'username',
      'coinBalance',
    ]);
    this.usersRepository.update({ id: id }, lostParams);
  }
}
