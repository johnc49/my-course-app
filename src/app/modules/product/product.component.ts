import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { getProductsAction } from 'src/app/state/product.action';
import { getProducts } from 'src/app/state/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsAction());
    this.products$ = this.store.select(getProducts);
  }
}
