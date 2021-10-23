import { Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Course } from './models/course.model copy';
import { Episode } from './models/episode.model';
import { User } from './models/user.model';

// 引入模型
const models = TypegooseModule.forFeature([User, Course, Episode])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/video-pro'),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
