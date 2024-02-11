import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { productReadDto } from '../../ProductsDto/productReadDto';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalCount = 0;
  page = 1;
  items: productReadDto[] = [];
  CountPerPage = 3;

  constructor(
    private productService: ProductService,
    private Dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.GetProducts(1);
  }
  GetProducts(page: number) {
    console.log('Page Change Event:', page);
    this.productService
      .GetAllProducts(page, this.CountPerPage)
      .subscribe((data) => {
        this.totalCount = data.totalCount;
        this.items = data.items;
        this.page = page;
      });
  }

  // Delete(productId: number) {

  //   this.productService.Delete(productId).subscribe({
  //     next: (response: any) => {
  //       console.log('Product deleted:', response);
  //     },
  //     error: (err: any) => console.error(err),
  //   });
  // }

  openConfirmationDialog(productId: number): void {
    const dialog = this.Dialog.open(DialogBoxComponent);

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Delete confirmed');

        this.productService.Delete(productId).subscribe({
          next: (response: any) => {
            console.log('Product deleted:', response);
          },
          error: (err: any) => console.error(err),
        });
      } else {
        console.log('Delete canceled');
      }
    });
  }
}
