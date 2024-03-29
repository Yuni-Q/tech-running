import {
  Controller,
  Get,
  HttpException,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { InvalidQueryException } from './common/exception/invalid.query.exception';
import { UndefinedToNullInterceptor } from './common/interceptors/undefined.interceptor';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('참고')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): any {
    try {
      throw new InvalidQueryException();
    } catch (e) {
      return this.appService.getHello();
    }
  }
  
  @Get('health')
  getHealth(): any {
    return 'OK';
  }

  @Get('error')
  error(): any {
    throw new Error('error');
  }
}
