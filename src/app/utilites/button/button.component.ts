import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input('text') text:string;
  @Input('size') size:string;
  class:string;

  constructor() { }

  ngOnInit() {
    if(this.size == 'lg')
      this.class = 'base';

    if(this.size == 'sm')
    this.class = 'base1';
    
  }

}
