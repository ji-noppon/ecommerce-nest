import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SupabaseModule } from './db/supabase.module';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
dotenv.config(); // โหลดตัวแปรสภาพแวดล้อมจากไฟล์ .env

@Module({
  imports: [ProductModule, SupabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
