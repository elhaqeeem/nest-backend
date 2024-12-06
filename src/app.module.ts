import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { MessagesModule } from './modules/messages/messages.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_project'),
    UsersModule,
    ProfilesModule,
    MessagesModule,
  ],
})
export class AppModule {}
