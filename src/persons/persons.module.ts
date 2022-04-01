import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { CatsServices } from 'src/cats/cats.services';
// import { CatsServices } from 'src/cats/cats.services';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

@Module({
    providers: [PersonsService],
    controllers: [PersonsController],
    // imports: [CatsModule]
})
export class PersonsModule {}
