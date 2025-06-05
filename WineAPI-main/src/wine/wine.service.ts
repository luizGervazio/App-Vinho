import { Injectable } from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wine } from 'src/entities/wine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WineService {
  constructor(
    @InjectRepository(Wine)
    private wineRepository: Repository<Wine>,
  ) {}

  async create(createWineDto: CreateWineDto) {
    const wine = this.wineRepository.create(createWineDto);
    return await this.wineRepository.save(wine);
  }

  findAll() {
    return this.wineRepository.find();
  }

  findOne(id: number) {
    return this.wineRepository.findOne({ where: { id } });
  }

  async update(id: number, updateWineDto: UpdateWineDto) {
  // Verifica se o vinho existe
  const wine = await this.wineRepository.findOneBy({ id });
  if (!wine) {
    throw new Error('Vinho nao encontrado');
  }

  // Atualiza os campos
  const updatedWine = this.wineRepository.merge(wine, updateWineDto);

  // Salva no banco
  return await this.wineRepository.save(updatedWine);
  }

  remove(id: number) {
    return this.wineRepository.delete({ id });
  }
}
