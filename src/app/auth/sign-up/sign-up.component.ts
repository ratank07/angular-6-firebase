import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { NotificationService } from '../../shared/notification.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private notifier: NotificationService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const fullname = form.value.fullname;
    const email = form.value.email;
    const password = form.value.password;
    console.log(fullname, email,password);

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(userData => {
      console.log(userData);
      firebase.auth().currentUser.sendEmailVerification();
      const message = `A verification message has been sent to ${email}, kindly check your inbox and verify email, to login to the application`
      this.notifier.display('success', message);
      return firebase.database().ref('users/'+firebase.auth().currentUser.uid).set({
        email: email,
        uid: firebase.auth().currentUser.uid,
        registrationDate: new Date().toString(),
        name: fullname
      }).then(()=> {
        firebase.auth().signOut();
      })
    })
    .catch(err => {
      this.notifier.display('error', err.message)
      console.log(err);
    });

  }

}
