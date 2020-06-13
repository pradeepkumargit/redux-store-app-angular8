import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.component';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.ngRedux
      .select<Array<Product>>('cart')
      .subscribe((items: Array<Product>) => {
        this.cart = items;
        console.log('what is in cart',this.cart);
      });
  }
  cart: Array<Product>;

  showShoppingList: boolean = false;

  showppingListDialog() {
    this.showShoppingList = !this.showShoppingList;
  }

  ngOnInit() {}
}
