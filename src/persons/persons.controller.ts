import { Controller, ForbiddenException, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CatsServices } from 'src/cats/cats.services';

@Controller('persons')
export class PersonsController {
    constructor(private c: CatsServices) {};
    @Get()
    findAll() {
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     error: 'Forbidden'
        // }, HttpStatus.FORBIDDEN);
        throw new ForbiddenException('Forbidden Custom mess');
    }
}
