import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UtilitesModule } from '../utilites/utilites.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UtilitesModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UtilitesModule
  ]
})
export class SharedModule { }
