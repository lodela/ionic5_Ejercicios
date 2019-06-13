import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  custom_route:string;
  @Input() value:string;

  constructor(
    private modalController:ModalController,
  ) { }

  ngOnInit() {
    // this.custom_route = this.navParams.get('custom_route');
  }
  closeModal(){
    this.modalController.dismiss();
  }

}
