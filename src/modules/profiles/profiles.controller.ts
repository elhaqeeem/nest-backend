import { Controller, Post, Get, Body, Request } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post('create')
  async createProfile(@Body() body: any, @Request() req) {
    const userId = req.user.id; // Assumes JWT middleware
    return this.profilesService.createProfile(userId, body);
  }

  @Get('me')
  async getProfile(@Request() req) {
    const userId = req.user.id;
    return this.profilesService.getProfile(userId);
  }
}
