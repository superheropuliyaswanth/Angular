import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] =[];

  constructor() {

    this.products[0] = new Product("1","iPhone", 75000, "Great Phone", true, "Images/111.png");
    this.products[1] = new Product("2","Nokia", 5000, "Simple Phone", true, 'Images/111.png');
    this.products[2] = new Product("3","Samsung", 15000, "Good Phone", true, 'Images/111.png');
    this.products[3] = new Product("4","Motorala", 25000, "Nice Phone", false, 'Images/111.png');   

   }
 
   getAllProducts():Product[]{
    return this.products;
   }
   getProduct(id:number):Product{
      return this.products[id];
   }
}