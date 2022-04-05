import { Global, Module } from '@nestjs/common';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CatsController } from './cats.controller';
import { CatsServices } from './cats.services';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsServices, ParseIntPipe, AuthGuard],
    exports: [CatsServices]
})
export class CatsModule {
    // constructor(private catsServices: CatsServices) {}

}
