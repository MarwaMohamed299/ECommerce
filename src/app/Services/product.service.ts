import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productPaginationDto } from '../Components/ProductsDto/productPaginationDto';
import { productReadDto } from '../Components/ProductsDto/productReadDto';
import { productUpdateDto } from '../Components/ProductsDto/ProductUpdateDto';
import { productAddDto } from '../Components/ProductsDto/ProductAddDto';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient :HttpClient) { }

  private Base_URL ="https://localhost:7175/api/Products/";

  GetAllProducts(page:number,countPerPage:number):Observable<productPaginationDto>{

   return this.httpClient.get<productPaginationDto>(`https://localhost:7175/api/Products/${page}/${countPerPage}`);
  }

  GetAllProductsById(id:any) :Observable <productReadDto>{
    return this.httpClient.get<productReadDto>(`https://localhost:7175/api/Products/${id}`);
  }
  add(newProduct: productAddDto): Observable<productAddDto> {
    return this.httpClient.post<productAddDto>(this.Base_URL, newProduct);
  }

  Update(updatedProduct: productUpdateDto, productId: number): Observable<productUpdateDto> {
    return this.httpClient.put<productUpdateDto>(`https://localhost:7175/api/Products/${productId}`, updatedProduct);
  }
Delete(productId: number): Observable<productReadDto> {
  return this.httpClient.delete<  productReadDto>(`${this.Base_URL}${productId}`);
}
}

