import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';

function DatabaseOrmModule(): DynamicModule {
  const config = new EnvService().read();

  return TypeOrmModule.forRoot({
    name: 'default',
    type: 'mysql',
    host: config.DB_HOST,
    port: 3306,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DATABASE,
    synchronize: false,
    logging: true,
    timezone: '+09:00',
    entities: [], // 설정 부분
  });
}

@Global()
@Module({
  imports: [EnvModule, DatabaseOrmModule()],
})
export class DatabaseModule {}
