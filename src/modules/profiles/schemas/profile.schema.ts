import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: false })
  zodiac: string;

  @Prop({ required: false })
  horoscope: string;

  @Prop({ required: false })
  bio: string;

  @Prop({ required: true })
  userId: string; // References User._id
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
