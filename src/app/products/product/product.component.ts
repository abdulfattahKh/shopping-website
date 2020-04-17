import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {



  @Input('index') index:number;
  @Input('product') product:{};
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['product']);
  }

}
