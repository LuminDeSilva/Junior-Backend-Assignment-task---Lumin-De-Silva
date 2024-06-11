import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){} 

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({id});
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async create(user: User): Promise<User> {
        return this.usersRepository.save(user);
    }

    update(id: number, user: Partial<User>): Promise<User> {
        return this.usersRepository.save({ ...user, id });
    }

    async findByEmail(email: string): Promise<User> {
        return this.usersRepository.findOneBy({email});
    }

}
