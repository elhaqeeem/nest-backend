import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schema';
import { calculateZodiac } from '../../shared/utils/zodiac.util';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
  ) {}

  async createProfile(userId: string, data: any): Promise<Profile> {
    const zodiac = calculateZodiac(data.dob);
    const newProfile = new this.profileModel({ ...data, userId, zodiac });
    return newProfile.save();
  }

  async getProfile(userId: string): Promise<Profile> {
    return this.profileModel.findOne({ userId }).exec();
  }
}
