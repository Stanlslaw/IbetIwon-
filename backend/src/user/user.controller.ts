import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'types.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('save')
  saveUser(@Body() user: UserDto, @Res() res: Response) {
    console.log(user);
    this.userService.saveUser(user);
    return { success: true };
  }

  @Post('update')
  updateUser(@Body() user: UserDto, @Res() res: Response) {
    console.log(user);
    this.userService.updateUser(user);
    return { success: true };
  }

  @Get(':tgid')
  async getUser(@Param('tgid') tgid: number) {
    try {
      const user = await this.userService.getUser(tgid);
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
