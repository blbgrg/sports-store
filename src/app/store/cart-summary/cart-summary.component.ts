import { Component } from '@angular/core';
import {Cart} from '../../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: []
})
export class CartSummaryComponent {

  constructor(
    public cart: Cart
  ) { }

}
