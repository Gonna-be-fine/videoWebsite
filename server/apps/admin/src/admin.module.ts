// import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from '@app/common';

@Module({
  imports: [
    CommonModule,
    MulterModule.register({
      dest: 'uploads'
    }),
    // DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
