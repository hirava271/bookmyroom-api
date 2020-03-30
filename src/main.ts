import * as express from 'express';
import {join} from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api');
    app.use(express.static(join(__dirname, "client/build")));
    await app.listen(process.env.PORT || 8080);
}

bootstrap();
