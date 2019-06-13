import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { LinkOriginNewsPipe } from '../../pipes/linkOriginNewsPipe';
import { SharedComponentsModule } from '../../shared/sharedComponents.module';


const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ModalPage,
    LinkOriginNewsPipe
  ]
})
export class ModalPageModule {}
