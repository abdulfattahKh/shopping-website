import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SharedModule } from '../shared/shared.module';
import { DropdownMenuComponent } from './navbar/dropdown-menu/dropdown-menu.component';
import { ProductsListComponent } from './navbar/products-list/products-list.component';
import { CollnectionsListComponent } from './navbar/collnections-list/collnections-list.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, SocialMediaComponent, DropdownMenuComponent, ProductsListComponent, CollnectionsListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    SocialMediaComponent
  ]
})
export class LayoutModule { }
