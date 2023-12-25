import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService = app.get(ConfigService);

  const apiVersion: number = configService.get<number>('API_VERSION');
  app.setGlobalPrefix(configService.get<string>('API_PREFIX'));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: `${apiVersion}`,
  });

  const config = new DocumentBuilder()
    .setTitle('meeting room booking system')
    .setDescription('api document')
    .setVersion(`${apiVersion}`)
    .addBearerAuth({
      type: 'http',
      description: 'auth based on jwt',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      defaultModelRendering: 'model',
    },
  });

  await app.listen(configService.get<number>('NEST_SERVER_PORT'));
}
bootstrap();
