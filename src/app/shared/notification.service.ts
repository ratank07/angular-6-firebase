import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 private sub = new Subject<any>();

 public emmiter = this.sub.asObservable()
 display(type,message){
   this.sub.next({type,message});
 }
 
 constructor() { }
}
