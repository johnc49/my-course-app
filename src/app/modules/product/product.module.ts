import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductStateModule } from 'src/app/state/product-state.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    SharedModule,
    ProductRoutingModule,
    ProductStateModule,
  ],
  exports: [],
  declarations: [ProductComponent],
})
export class ProductModule {}
