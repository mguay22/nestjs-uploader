import { Module } from '@nestjs/common';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UploadModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
