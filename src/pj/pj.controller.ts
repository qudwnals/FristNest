import {Controller, Get} from '@nestjs/common';
import {AppService} from "../app.service";
import {PjService} from "./pj.service";

@Controller('pj')
export class PjController {
    constructor(private readonly pjService: PjService) {}
    @Get()
    getWelcome(): string {
        return this.pjService.getWelcom();
    }
}

