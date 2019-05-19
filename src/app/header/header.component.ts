import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  email:string = null;
  uid: string= null;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    // we r ogged in
      firebase.auth().onAuthStateChanged(userData => {
        if(userData && userData.emailVerified){
          this.email = userData.email;
          this.uid = userData.uid;
this.isLoggedIn = true;
        }
        else{
          this.isLoggedIn = false;
          this.userservice.destroy();
        //  firebase.auth().signOut();
        }
      })
  }
  onLogout(){
    firebase.auth().signOut()
    .then(()=>{
      this.isLoggedIn= false;

    })
  }

}
