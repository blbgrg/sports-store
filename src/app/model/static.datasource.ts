import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

import {Product} from './product.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'Description of Product 1 (Category 1)', 100),
    new Product(2, 'Product 2', 'Category 1', 'Description of Product 2 (Category 1)', 100),
    new Product(3, 'Product 3', 'Category 1', 'Description of Product 3 (Category 1)', 100),
    new Product(4, 'Product 4', 'Category 1', 'Description of Product 4 (Category 1)', 100),
    new Product(5, 'Product 5', 'Category 1', 'Description of Product 5 (Category 1)', 100),
    new Product(6, 'Product 6', 'Category 2', 'Description of Product 6 (Category 2)', 100),
    new Product(7, 'Product 7', 'Category 2', 'Description of Product 7 (Category 2)', 100),
    new Product(8, 'Product 8', 'Category 2', 'Description of Product 8 (Category 2)', 100),
    new Product(9, 'Product 9', 'Category 2', 'Description of Product 9 (Category 2)', 100),
    new Product(10, 'Product 10', 'Category 2', 'Description of Product 10 (Category 2)', 100),
    new Product(11, 'Product 11', 'Category 3', 'Description of Product 11 (Category 3)', 100),
    new Product(12, 'Product 12', 'Category 3', 'Description of Product 12 (Category 3)', 100),
    new Product(13, 'Product 13', 'Category 3', 'Description of Product 13 (Category 3)', 100),
    new Product(14, 'Product 14', 'Category 3', 'Description of Product 14 (Category 3)', 100),
    new Product(15, 'Product 15', 'Category 3', 'Description of Product 15 (Category 3)', 100),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
