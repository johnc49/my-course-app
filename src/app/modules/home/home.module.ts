import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  exports: [],
  declarations: [HomeComponent],
})
export class HomeModule {}
