import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  productaddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private productService:ProductService) {
    // this.productaddForm = this.formBuilder.group({
    //   productName: ['', Validators.required ,Validators.minLength(2),Validators.maxLength(40)],
    //   price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    // });
    this.productaddForm = this.formBuilder.group({
      orderId: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });

  }

  add() {
    if (this.productaddForm.valid) {
      this.productService.add(this.productaddForm.value).subscribe({
        next: (response: any) =>{
          console.log('Product Name:', this.productaddForm.value.productName , response);
          console.log('Price:', this.productaddForm.value.price);
        },
        error: (err: any)=>console.error(err)
    });
    }
  }
}
