import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';

import {LandingComponent} from '../../dashboard/landing/landing.component';
import {
    Push,
    PushToken
} from '@ionic/cloud-angular';

@Component({
    selector: 'sigin-component',
    templateUrl: "./signin.html",
})
export class SiginComponent {


    constructor(
      private navController:NavController,
      private push: Push
    ) {
        this.push.register().then((t: PushToken) => {
            return this.push.saveToken(t);
        }).then((t: PushToken) => {
            console.log('Token saved:', t.token);
        });
    }

    ngOnInit() {


    }

    public gotoDashboard(){
      this.navController.setRoot(LandingComponent)
    }


}
