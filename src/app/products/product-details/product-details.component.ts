import { Component, OnInit, ViewEncapsulation ,} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


    displaySpecifications:boolean;
    displayMaterials:boolean;
    displayWarranty:boolean;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '600px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: true
      }
  ];

  this.galleryImages = [
    {
        small: 'assets/photo1.jpg',
        medium: 'assets/photo1.jpg',
        big: 'assets/photo1.jpg'
    },
    {
        small: 'assets/photo1.jpg',
        medium: 'assets/photo1.jpg',
        big: 'assets/photo1.jpg'
    },
    {
        small: 'assets/photo1.jpg',
        medium: 'assets/photo1.jpg',
        big: 'assets/3-big.jpg'
    },
    {
      small: 'assets/photo1.jpg',
      medium: 'assets/photo1.jpg',
      big: 'assets/3-big.jpg'
    }
  ];

  }

  toggleSpecifications() {
    this.displaySpecifications = !this.displaySpecifications;
  }
  toggleMaterials() {
    this.displayMaterials = !this.displayMaterials;
  };
  toggleWarranty() {
    this.displayWarranty = !this.displayWarranty;
  };
}
