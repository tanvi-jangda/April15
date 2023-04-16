import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBatches } from './batches';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  //in future this path will be replaced by url of server
  public URL:string="/assets/Data/Batches.json";

  //inject http
  constructor(public hObj:HttpClient) {

   }

   public getBatchDetails():Observable<IBatches[]>
   {
    //using the get method of http client object and we do typecasting of get data
   return this.hObj.get<IBatches[]>(this.URL)
   }
}
