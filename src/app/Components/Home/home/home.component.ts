import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { productReadDto } from '../../ProductsDto/productReadDto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    totalCount =0;
    page =1;
    items:productReadDto[]=[];

 CountPerPage =15;

 constructor(private productService:ProductService){}
    ngOnInit(): void {
      this.GetProducts(1);
    }
    GetProducts(page: number) {
      console.log('Page Change Event:', page);
      this.productService.GetAllProducts(page, this.CountPerPage)
        .subscribe((data) => {
          this.totalCount = data.totalCount;
          this.items = data.items;
        });
    }

    }


