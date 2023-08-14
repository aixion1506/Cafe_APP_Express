import { v4 as uuidv4 } from 'uuid';
import { CoffeeMenu } from '../db/models/CoffeeMenu';
import Storage from '../db/Storage';

class CoffeeMenuService {
  storage;
  constructor(storage) {
    this.storage = storage;
  }

  /**
   * @param {string} name
   * @param {number} price
   * @param {boolean} ice
   * @param {boolean} hot
   */
  addCoffeeMenu({ name, price, ice, hot }) {
    const coffeeMenu = { id: uuidv4(), name, price, ice, hot };
    return this.storage.create(CoffeeMenu);
  }

  getMenu(id) {
    // storage의 메서드를 사용해주세요
    return this.storage.get(id);
  }

  getMenus() {
    const menus = this.storage.getAll();
    if (menus.length === 0) {
      throw new Error('아직 카페 ');
    }
  }
}

export const coffeeMenuService = new CoffeeMenuService(new Storage());
