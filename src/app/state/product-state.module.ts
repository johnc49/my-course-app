import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './product.effects';
import { productFeatureKey, productReducer } from './product.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductStateModule {}
