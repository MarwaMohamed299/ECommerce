import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductUpdateDto } from '../ProductsDto/ProductUpdateDto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditProductComponent implements OnInit {
  productEditForm: FormGroup;
  id: any;
  updatedProduct:ProductUpdateDto= new ProductUpdateDto();

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productEditForm = this.formBuilder.group({
      tagId: ['', Validators.required],
      Name: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['Id'];
  }

  onSubmit() {
    if (this.productEditForm.valid) {
      console.log('Product Id :', this.id);
      this.updatedProduct.productId=this.id
      this.productService
        .Update(this.productEditForm.value, this.id)
        .subscribe({
          next: () => {
            console.log('Updated successfully');
            alert('Updated Successfully');
          },
          error: (error) => {
            console.log(this.productEditForm.value, this.id);
          },
        });
    }
  }
}
