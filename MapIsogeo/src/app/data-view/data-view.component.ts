import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
  providers: [HttpClient]
})
export class DataViewComponent implements OnInit {

  items: any[]=[];
  itemsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.getItems();
  }
  
  getItems(): void{
    this.ItemsServiceGetItems()
    .subscribe(
      items => {
        this.items = items;
        console.log(this.items);
      }
    )
  }
 
ItemsServiceGetItems(){
  return this.http
  .get<any[]>(this.itemsUrl)
  .pipe(map(data => data));
}


}