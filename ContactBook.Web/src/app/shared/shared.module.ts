import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    CountryService
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
