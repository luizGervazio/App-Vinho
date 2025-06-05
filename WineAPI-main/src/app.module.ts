import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WineModule } from './wine/wine.module';
import { Wine } from './entities/wine.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ejdvg1996',
      database: 'smk',
      entities: [Wine],
      synchronize: true,
    }),
    WineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
