import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({ global: true, secret: process.env.JWT_SECRET }),
    MongooseModule.forRoot(`${process.env.DB_URL}`),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
