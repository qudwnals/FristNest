import { Injectable } from '@nestjs/common';

@Injectable()
export class PjService {
    getWelcome(): string {
        return 'welcome nestjs!!!';
    }
}
