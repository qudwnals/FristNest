import { Module } from '@nestjs/common';
import { PjController } from './pj.controller';
import { PjService } from './pj.service';



@Module({
  controllers: [PjController],
  providers: [PjService]
})
export class PjModule {}
