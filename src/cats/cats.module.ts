import { Global, Module } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CatsController } from './cats.controller';
import { CatsServices } from './cats.services';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsServices, ParseIntPipe],
    exports: [CatsServices]
})
export class CatsModule {
    // constructor(private catsServices: CatsServices) {}

}
