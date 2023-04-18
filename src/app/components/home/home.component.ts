import { Component, OnInit } from '@angular/core';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor( private fsService: FakestoreService) {}

  products: any[] = [];
  //products: Product[] = [];


  ngOnInit(): void {
    this.fsService.getProduct().subscribe((results:any) => {
      this.products = results
      console.table(results)
      //this.products.push(products.data[0].attributes)..Array
      //this.products = products.data[0].attributes...This is another way of doing it but it doesnt really go through an array.
      //console.table(product.data)
       
      //products.data.foreach((element:any) => {      //We will be using Javascript to omit one at a time
       // console.log(element.atrribute)
        //this.products.push(element.attributes)..


     // }
      
    })
  }
   // constructor (private productService: ProductService)
   // ngOnInit(): void {
//  this.get_Products
//}
}
