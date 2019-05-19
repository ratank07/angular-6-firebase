import { Component, OnInit } from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import * as firebase from 'firebase';
import { NotificationService } from '../../shared/notification.service';
import { MyfireService } from '../../shared/myfire.service';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notifier:NotificationService,
     private myfire: MyfireService,
    private user: UserService,
  private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const email = form.value.email;
    const password= form.value.password;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(userData => {
      
      if(firebase.auth().currentUser.emailVerified){
        console.log('next');
        console.log(firebase.auth().currentUser.uid);
        this.user.set(userData);
        this.router.navigate(['/allposts']);
        console.log(userData);
        return this.myfire.getUserFromDatabase(firebase.auth().currentUser.uid)
      }
      else{
        const message = "Your email is not verified";
        this.notifier.display('error', message);
        firebase.auth().signOut();
      }
    })
    .then(userDataFromDatabase => {
      console.log(userDataFromDatabase);
      
      if(userDataFromDatabase){
        this.user.set(userDataFromDatabase);

       // console.log(userDataFromDatabase);
      }
    })
    .catch(err => {
      this.notifier.display('error', err.message);
    })
  }

}
