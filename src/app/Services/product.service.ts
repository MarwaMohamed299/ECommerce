import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient :HttpClient) { }

  private Base_URL ="https://localhost:7284/api/Products"

  GetAllProducts(){
   return this.httpClient.get(this.Base_URL);
  }

  GetAllProductsById(id:any){
    return this.httpClient.get(this.Base_URL+'/'+id);
  }
}