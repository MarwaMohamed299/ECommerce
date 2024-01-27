import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { productReadDto } from '../ProductsDto/productReadDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Product-Details',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css'],
})
export class ProducrDetailsComponent {
  Name: string = '';
  Price: Number |string= 0;
  id = 0;
  retrievedProduct = new productReadDto();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);

    this.productService.GetAllProductsById(this.id).subscribe({
      next: (data: any) => {
        console.log('Product  retrieved successfully');
        this.retrievedProduct = data;
        this.Name=this.retrievedProduct.name
        this.Price =this.retrievedProduct.price
      },
      error: (error) => {
        console.log(this.id);
      },
    });
  }
  }

