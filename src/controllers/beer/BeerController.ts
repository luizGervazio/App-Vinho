import { Beer } from '../../models/beer/Beer';
import * as BeerStorage from '../../services/storage/storage';
import { v4 as uuid } from 'uuid';

export async function addBeer(data: Omit<Beer, 'id'>): Promise<void> {
  const beer: Beer = { ...data, id: uuid() };
  const beers = await BeerStorage.getBeers();
  beers.push(beer);
  await BeerStorage.saveBeers(beers);
}

export async function getAllBeers(): Promise<Beer[]> {
  return await BeerStorage.getBeers();
}
