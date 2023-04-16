import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit {

  public Batches : any=[];
  constructor(public hObj:BatchService){}

ngOnInit()
{
return this.hObj.getBatchDetails().subscribe(data=>this.Batches=data)
}
}
