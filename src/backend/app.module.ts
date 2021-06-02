import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './common/env/env.module';
import { VersionMiddleware } from './common/middlewares/version.middleware';
import { ViewsModule } from './views/views.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MorganModule,
    // DatabaseModule,
    EnvModule,
    ViewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(VersionMiddleware).forRoutes('api/v1');
  }
}
