import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataViewComponent } from './data-view/data-view.component';



@Injectable({
  providedIn: 'root'
})
export class DataReadService {

  constructor(private dataReadService: DataReadService ) { }
  
}

