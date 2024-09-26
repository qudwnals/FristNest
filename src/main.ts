import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PjModule} from "./pj/pj.module";

async function bootstrap() {
  const pj = await NestFactory.create(PjModule);
  await pj.listen(3000);
}
bootstrap();
