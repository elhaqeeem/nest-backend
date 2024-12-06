import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async sendMessage(senderId: string, receiverId: string, content: string) {
    const message = new this.messageModel({ senderId, receiverId, content });
    return message.save();
  }

  async getMessages(senderId: string, receiverId: string) {
    return this.messageModel
      .find({
        $or: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      })
      .sort({ timestamp: -1 })
      .exec();
  }
}
