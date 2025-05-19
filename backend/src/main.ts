import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173', // or ['http://localhost:5174', 'https://your-production-domain.com']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // if you need to pass cookies/authentication
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
