import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseConfigService } from './config/database/config.service';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfig: DatabaseConfigService = app.get('DatabaseConfigService');

  console.log(appConfig.dbURL);

  await app.listen(3000);
}
bootstrap();
