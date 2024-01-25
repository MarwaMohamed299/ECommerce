import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productPaginationDto } from '../Components/ProductsDto/productPaginationDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient :HttpClient) { }

  private Base_URL ="https://localhost:7284/api/Products"

  GetAllProducts(page:number,countPerPage:number):Observable<productPaginationDto>{

   return this.httpClient.get<productPaginationDto>(`https://localhost:7175/api/Products/${page}/${countPerPage}`);
  }

  GetAllProductsById(id:any){
    return this.httpClient.get(this.Base_URL+'/'+id);
  }
}
