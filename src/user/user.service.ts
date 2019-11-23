import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRep: Repository<UserEntity> ) {}

    async signIn(data: UserDTO ) {
        const {username, password} = data;
        const user = await this.userRep.findOne({where: {username}});
        if (!user || !(user.ComparePassword(password))) {
            throw new HttpException ('inCorrect username/password', HttpStatus.BAD_REQUEST);
        }
        return user.responseObject();
    }

    async create(data: UserDTO) {
        const {username} = data;
        let user = await this.userRep.findOne({where: {username}});
        if (user) {
            throw new HttpException('username already exists', HttpStatus.BAD_REQUEST);
        }
        user = await this.userRep.create(data);
        await this.userRep.save(user);
        return user.responseObject();
    }
}
