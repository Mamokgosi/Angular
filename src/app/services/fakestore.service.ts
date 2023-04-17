import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor( private http: HttpClient ) { }

  getProduct() {
    return this.http.get("https://fakestoreapi.com/products/");
    
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
   }

}
