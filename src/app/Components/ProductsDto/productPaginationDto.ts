import { productReadDto } from './productReadDto';

export class productPaginationDto {
  items: productReadDto[] = [];
  totalCount: number = 0;
}
