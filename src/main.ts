import * as express from 'express';
import {join} from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(express.static(join(process.cwd(), "/client/build")));
    await app.listen(process.env.PORT || 8080);
}

bootstrap();
