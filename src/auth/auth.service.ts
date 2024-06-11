import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './payload.interface';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const pay:JwtPayload = {email: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(pay),
        };
    }

    async register(user: any) : Promise<any> {
        const salt= await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt); 
        return this.usersService.create(user);
    }

}
