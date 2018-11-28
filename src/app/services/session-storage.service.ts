import {Injectable} from '@angular/core';
import {Product} from '../shared/model/product';

@Injectable()
export class SessionStorageService {
  key = 'shopingList';

  constructor() {
  }

  getShopingList(): Product[] {
    if (sessionStorage.length === 0) return [];
    return JSON.parse(sessionStorage.getItem(this.key));
  }

  addToShopingList(product: Product): Product[] {
    let shopingList = [];
    if (sessionStorage.length > 0) {
      shopingList = JSON.parse(sessionStorage.getItem(this.key));
    }
    shopingList.push(product);
    sessionStorage.setItem(this.key, JSON.stringify(shopingList));
    return shopingList;
  }

  deleteFromShopingList(productId: string): void {
    if (sessionStorage.length === 0) return;
    let shopingList = JSON.parse(sessionStorage.getItem(this.key));
    const index = shopingList.findIndex(item => item._id === productId);
    if(index === -1) return
    shopingList.splice(index, 1);
    sessionStorage.setItem(this.key, JSON.stringify(shopingList));
  }

  clear(): void {
    sessionStorage.clear();
  }
}
