import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvData {
  APP_ENV: string;
  TZ: string;
  DB_USERNAME: string;
  DB_HOST: string;
  DB_PASSWORD: string;
  DATABASE: string;
  PORT: number;
}

export class EnvService {
  private vars: EnvData;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    const data: any = dotenv.parse(fs.readFileSync(`.env`));
    // const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));

    data.APP_ENV = environment;
    data.PORT = parseInt(data.DB_PORT);

    this.vars = data as EnvData;
  }

  read(): EnvData {
    return this.vars;
  }

  isDev(): boolean {
    return this.vars.APP_ENV === 'development';
  }

  isProd(): boolean {
    return this.vars.APP_ENV === 'production';
  }
}
