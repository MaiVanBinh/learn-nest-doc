import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PersonsModule } from './persons/persons.module';
import { logger } from './common/middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ConfigModule.forRoot(), CatsModule, PersonsModule, CommonModule],
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
