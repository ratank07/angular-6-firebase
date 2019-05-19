import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  set(userfromDatabase){
    localStorage.setItem('user', JSON.stringify(userfromDatabase))
  }
  destroy(){
    localStorage.removeItem('user');
  }
}
