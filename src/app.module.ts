import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PersonsModule } from './persons/persons.module';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule, PersonsModule],
  controllers: [AppController],
  providers: [AppService],
  // exports: [CatsServices] // Now any module that imports the CatsModule has access to the CatsService
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).exclude('cats/(.*)').forRoutes({
      path: '*',
      method: RequestMethod.GET
    })
  }
}
