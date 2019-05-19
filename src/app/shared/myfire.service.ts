import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MyfireService {

  constructor() { }

  getUserFromDatabase(uid){
    const ref = firebase.database().ref('users/'+uid);
    console.log(ref);
    return ref.once('value')
    .then(snapshot => {

    var key = snapshot.key; // "ada"
    var childKey = snapshot.child("name/last").key; // "last"


    console.log(`${key} and ${childKey}`);

     return snapshot.val();
    }
    
    )
  }
}
