import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingInputComponent } from './searching-input/searching-input.component';
import { ButtonComponent } from './button/button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxGalleryModule } from 'ngx-gallery-9';


@NgModule({
  declarations: [SearchingInputComponent, ButtonComponent, PaginationComponent],
  imports: [
    CommonModule,
    NgxGalleryModule
  ],
  exports:[
    SearchingInputComponent, ButtonComponent, PaginationComponent,NgxGalleryModule
  ]
})
export class UtilitesModule { }
