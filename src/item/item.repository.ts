import { Injectable } from '@nestjs/common';

import { IItemInterface } from './item.interface';
import { ItemModel } from './item.model';

@Injectable()
export class ItemRepository {

  async getItemById(id: string) {

    // fetch it from database for example
    const item: IItemInterface = {
      id,
      amount: 230,
    };

    return new ItemModel(item);
  }

  async getAll() {
    return [];
  }
}