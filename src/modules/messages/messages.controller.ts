import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('send')
  async sendMessage(@Body() body: any) {
    return this.messagesService.sendMessage(body.senderId, body.receiverId, body.content);
  }

  @Get('history')
  async getMessages(@Body() body: any) {
    return this.messagesService.getMessages(body.senderId, body.receiverId);
  }
}
