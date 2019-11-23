import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.model';

@Controller('user')
export class UserController {
    constructor(private userservice: UserService) {}

    @Post('login')
    async findByLogin(@Body() data: UserDTO) {
    return await this.userservice.signIn(data);
    }

    @Post('register')
    async create(@Body() data: UserDTO) {
        return await this.userservice.create(data);
    }
}
