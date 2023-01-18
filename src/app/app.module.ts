import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { sharedModule } from './modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './modules/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    sharedModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
