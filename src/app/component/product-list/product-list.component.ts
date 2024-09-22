import { Component, OnChanges, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HttpBasedProductService } from '../../services/http-based-product.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService, HttpBasedProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products!: Product[];


  productService!:ProductService;
  
    constructor( productService:ProductService, httpbasedProductService: HttpBasedProductService){
      this.productService = productService;
      this.httpbasedProductService = httpbasedProductService;
    }
  
  /*  ngOnInit():void {
      this.products = this.productService.getAllProducts();
    }
  
    */

  httpbasedProductService!: HttpBasedProductService;

  // constructor(httpbasedProductService: HttpBasedProductService) {
  //   this.httpbasedProductService = httpbasedProductService;
  // }

  ngOnInit(): void {
    this.httpbasedProductService.getAllProducts().subscribe(

      (response) => { this.products = response }

    );
  }


  deleteProduct(id: string): void {
    this.httpbasedProductService.deleteProduct(id).subscribe(

      () => {

        // Fetch the updated product list 
        this.httpbasedProductService.getAllProducts().subscribe(

          (response) => { this.products = response }

        );

      }

    )
  }


}