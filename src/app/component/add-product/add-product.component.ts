import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpBasedProductService } from '../../services/http-based-product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [HttpBasedProductService],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  productForm!: FormGroup;
  httpbasedProductService!: HttpBasedProductService;

  constructor(private fb: FormBuilder, httpbasedProductService: HttpBasedProductService) {
    this.httpbasedProductService = httpbasedProductService;

    this.productForm = this.fb.group(

      {
        productName: [''],
        productPrice: [0],
      }

    );
  }

  


  addProduct(): void {
    let name = this.productForm.get('productName')?.value;
    let price = this.productForm.get('productPrice')?.value;

    let id =this.getRandomInt(1000,10000);

    let tempProduct = new Product(""+id, name, price, '', true, 'images/444.png');

    this.httpbasedProductService.addProduct(tempProduct).subscribe(

      (newProd) => console.log("Add a new Product . It's id = " + newProd.id)

    )
  }


   getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

}