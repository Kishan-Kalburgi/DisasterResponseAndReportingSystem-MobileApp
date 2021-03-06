import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { ReportDisasterPage } from '../pages/report-disaster/report-disaster';
import { RegisFormPage } from '../pages/regis-form/regis-form';
import { StartRegisPage } from '../pages/start-regis/start-regis';
import { RegisConfirmPage } from '../pages/regis-confirm/regis-confirm';
import { PasswordPage } from '../pages/password/password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

   rootPage: any = LoginPage;
  // rootPage: any = ReportDisasterPage;
  // PasswordPage
  // rootPage: any =StartRegisPage
  // LoginPage ;
  // SignupPage
  // rootPage: any =  RegisFormPage;
  // ReportDisasterPage

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Dashboard', component: DashboardPage },
      { title: 'Logout', component: LoginPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pushSetup() {

    const options: PushOptions = {
      android: {
        senderID : '898191951172'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
