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
  itemsUrl = 'https://id.api.isogeo.com/oauth/authorize';
  client = "isogeo-dashboard-bc2882676b2e4b93a8d68c26e12c60d0";
  secretUrl ="kRS7psA05y8ZJ53zsyD5nCB0mRRygnfXa6DeEaFPZ0k6qBTVigxlqSFQwmSJzU5W";



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