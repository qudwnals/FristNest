import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PjModule } from './pj/pj.module';


@Module({
  imports: [PjModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
