import { Component } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent {
  public Batches:any=[];
  
  //inject services
  constructor(public hObj:BatchService){}

ngOnInit()
{
return this.hObj.getBatchDetails().subscribe(data=>this.Batches=data)
}
}
