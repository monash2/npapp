import { Component } from '@angular/core';
import{ Http,Headers} from'@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data : any;

  constructor(public navCtrl: NavController, public http: Http) {

  }
  ionview(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      security:"LL9Ny4IF",
      email: "you@yourmail.com",
      password: 123124



    };
    this.http.post('https://api.pathola.com/freelance_login_submit.php?',body,{headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    })
  }

}
