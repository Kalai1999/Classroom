import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
