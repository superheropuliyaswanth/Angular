import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class HttpBasedProductService {

  apiBaseUrl:string = "http://localhost:3000/products"


  constructor(private httpClt: HttpClient) {}

  // READ of CRUD
  getAllProducts():Observable<Product[]> {  
    return this.httpClt.get<Product[]>(this.apiBaseUrl);   
   }

   // D of CRUD
   //CHALLENGE: Enhance the HTTPbased product service that will delete a product from the products.
   deleteProduct(id:string):Observable<void> {  
     return this.httpClt.delete<void>(this.apiBaseUrl+"/"+id);   
   }

   // CREATE of CRUD
   addProduct(prod:Product):Observable<Product> {  
    return this.httpClt.post<Product>(this.apiBaseUrl, prod);   
  }


}