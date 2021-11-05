import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonService } from './common.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DbModule
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
