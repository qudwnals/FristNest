import { Injectable } from '@nestjs/common';

@Injectable()
export class PjService {
    getWelcom(): string {
        return 'welcom nextjs!';
    }
}
