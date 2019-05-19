import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'install-like';
  ngOnInit(){
    var firebaseConfig = {
      apiKey: "AIzaSyCpV8W_9xNUljqynwGoTytD47Jjte-2J0Q",
      authDomain: "instagram-15919.firebaseapp.com",
      databaseURL: "https://instagram-15919.firebaseio.com",
      projectId: "instagram-15919",
      storageBucket: "instagram-15919.appspot.com",
      messagingSenderId: "551476249071",
      appId: "1:551476249071:web:ece57c99b7629481"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
