import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserSignupCredentials } from './dto/UserSignupCredentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>) { }

    async signUp(userSignupCredentials: UserSignupCredentials): Promise<string> {
        const {  email, password,username,role } = userSignupCredentials;
        const user = await this.userModel.findOne({ email });
        if (user) {
            return 'User already exist';
        }
        const new_user = new this.userModel();
        new_user.username=username;
        new_user.role=role;
        new_user.email = email;
        new_user.salt = await bcrypt.genSalt();
        new_user.password = await this.hashPassword(password, new_user.salt);
        await new_user.save();
        return 'User signed up successfully !'
    }
    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

   async get_all_users(){
       const users = await this.userModel.find();
       return users;
   }
}
