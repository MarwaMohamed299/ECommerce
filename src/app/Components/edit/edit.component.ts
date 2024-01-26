import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() productData: { productName: string; price: number; } | undefined;
  productEditForm: FormGroup;
  id: any;


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productEditForm = this.formBuilder.group({
      tagId: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });

    if (this.productData) {
      this.productEditForm.patchValue({
        productName: this.productData.productName,
        price: this.productData.price
      });
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['Id'];
  }

onSubmit(){
  debugger
  if(this.productEditForm.valid){
    console.log('Product Id :' ,this.id)
this.productService.Update(this.productEditForm.value, this.id).
subscribe({
  next: () => {
    console.log('Updated successfully ' )
  },
  error:(error) => {
    console.log(this.productEditForm.value, this.id);
  }
});
}
}
}
