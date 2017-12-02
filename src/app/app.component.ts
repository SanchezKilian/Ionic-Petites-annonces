import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyAP5dK6nytTZQZYKHIfwOMhK59eAIS6kw4",
      authDomain: "projetz-603d4.firebaseapp.com",
      databaseURL: "https://projetz-603d4.firebaseio.com",
      projectId: "projetz-603d4",
      storageBucket: "projetz-603d4.appspot.com",
      messagingSenderId: "284120401959"
  
    });


  }



}

