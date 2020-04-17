import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {Order} from './order';
import {map} from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {

  baseUrl: string;
  // tslint:disable-next-line:variable-name
  auth_token: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<{success: boolean, token: string}>(
      this.baseUrl + 'login',
      { name: user, password: pass }
    ).pipe(
      map(({success, token}) => {
        this.auth_token = success ? this.auth_token = token : null;
        return success;
      })
    );
  }

  getHeaders(): HttpHeaders {
    if (this.auth_token) {
      return new HttpHeaders(`Authorization: Bearer<${this.auth_token}>`);
    }
    return null;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product, {headers: this.getHeaders()});
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + `products/${product.id}`, product, {headers: this.getHeaders()});
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + `products/${id}`, {headers: this.getHeaders()});
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders', {headers: this.getHeaders()});
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + `orders/${id}`, {headers: this.getHeaders()});
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order, {headers: this.getHeaders()});
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
}
