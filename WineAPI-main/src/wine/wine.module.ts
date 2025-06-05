import { Module } from '@nestjs/common';
import { WineService } from './wine.service';
import { WineController } from './wine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wine } from 'src/entities/wine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wine])],
  controllers: [WineController],
  providers: [WineService],
})
export class WineModule {}
