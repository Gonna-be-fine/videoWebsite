import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置允许跨域
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('video api')
    .setDescription('video api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  
  const PORT = process.env.SERVER_PORT || 3002;
  await app.listen(PORT);
  console.log(PORT)
}
bootstrap();
