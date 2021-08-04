import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Search';
  searchText:any;
  products = [
    { id: 1, name: 'Smartphone',price:10000 ,image:"/assets/smartphone.jpg"},
    { id: 2, name: 'Headphone',price:15000,image:"/assets/headphone.jpg" },
    { id: 3, name: 'Bike',price:50000,image:"/assets/bike.jpg" },
    { id: 4, name: 'Laptop',price:85000,image:"/assets/laptop.jpg" },
    { id: 5, name: 'TV',price:35000,image:"/assets/tv.jpg" },
    { id: 6, name: 'PC',price:50000 ,image:"/assets/pc.jpg"},
    { id: 7, name: 'Car' ,price:200000,image:"/assets/car.jpg"}
  ];
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.products = this.products.sort(function (low, high) {
            if (low.name < high.name) {
              return -1;
            }
            else if (low.name > high.name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.products = this.products.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.products;

  }
  ngOnInit(): void {
    
  }

  
  
  
}