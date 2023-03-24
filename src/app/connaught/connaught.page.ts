import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
})
export class ConnaughtPage implements OnInit {

  constructor(private nacCtrl:NavController) { }

  ngOnInit() {
  }
  onButtonClick() {
    this.nacCtrl.navigateForward('/connaught-counties')
  }

}
