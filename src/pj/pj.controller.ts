import {Controller, Get} from '@nestjs/common';
import {AppService} from "../app.service";
import {PjService} from "./pj.service";

@Controller()
export class PjController {
    private readonly pjService:PjService;

    constructor(pjService : PjService) {
        this.pjService = pjService;
    }


    @Get()
    getWelcome(): string {
        return this.pjService.getWelcome();
    }
}

