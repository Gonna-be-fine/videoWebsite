import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);
  // 设置允许跨域
  app.enableCors()
  // 静态托管uploads文件夹
  app.useStaticAssets('uploads', {
    prefix: '/uploads'
  })

  const config = new DocumentBuilder()
    .setTitle('video api')
    .setDescription('video api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const PORT = process.env.ADMIN_PORT || 3001;
  await app.listen(PORT);
  console.log(PORT)
}
bootstrap();