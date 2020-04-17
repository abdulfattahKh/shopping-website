import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  displayShopProducts:boolean;
  displayCollections:boolean;
  constructor() { }

  ngOnInit() {
  }


  toggleShopProducts() {
    this.displayShopProducts = !this.displayShopProducts;
    if(this.displayCollections && this.displayShopProducts) {
      this.displayCollections = false;
    }
  }

  toggleCollections() {
    this.displayCollections = !this.displayCollections;
    if(this.displayCollections && this.displayShopProducts) {
      this.displayShopProducts  = false;
    }
  }



}
