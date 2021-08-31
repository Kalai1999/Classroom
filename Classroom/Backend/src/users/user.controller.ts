import { Body, Controller, HttpStatus, Post, Res, ValidationPipe,Get, UseGuards, Req } from '@nestjs/common';
import { UserSignupCredentials } from './dto/UserSignupCredentials.dto';
import JwtAccessGuard from 'src/auth/jwt-access-guard';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}


  @Get('/get')
  @UseGuards(JwtAccessGuard)
  async getAllUsers(@Req() req,@Res() res){
   const response = await this.usersService.get_all_users();
   return res.status(HttpStatus.OK).json({
     message: 'List of all users',
     users: response,
   });
  }
  
  @Post('signup')
  async signUp(@Body(ValidationPipe) userSignupCredentials:UserSignupCredentials,@Res() res){
    const response = await this.usersService.signUp(userSignupCredentials);
    return res.status(HttpStatus.OK).json({
      message:response
    })
  }

  

}
