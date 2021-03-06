import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the RegisConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regis-confirm',
  templateUrl: 'regis-confirm.html',
})
export class RegisConfirmPage {
  user:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.user=this.navParams.get('user')
    console.log('ionViewDidLoad RegisConfirmPage');
    // this.navCtrl.push(DashboardPage);
  }

  Dashboardrun1(){
    window.alert("There is a flood disaster at South of Mozingo Lake, Polk Township, MO 64468 \n Do you want to accept this EOC request and visit the location?")
  this.navCtrl.setRoot(DashboardPage,{user:this.user});
  }


  // run()
  // {
  //   this.varngpService.start()
  //   setTimeout(()=>{this.varngpService.done()},2000)
  // }

}
