import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CommentComponent } from './feedback/comment/comment.component';


@NgModule({
  declarations: [HomeComponent, HeroComponent, AboutUsComponent, FeedbackComponent, WhyChooseUsComponent, CommentComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    ProductsModule
  ]
})
export class HomePageModule { }
