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

  ngOnInit(): void {
    this.fsService.getProduct().subscribe((results:any) => {
      this.products = results
      console.table(results)
    })
  }

}
