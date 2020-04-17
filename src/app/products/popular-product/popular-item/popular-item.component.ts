import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.scss']
})
export class PopularItemComponent implements OnInit {


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
