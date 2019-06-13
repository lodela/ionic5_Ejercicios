import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { ModalPage } from '../../modal/modal.page';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {
  detail:any;
  press:string;
  title:string;
  content:string;
  route:string;

  constructor(
    private newsService:NewsService,
    private activatedRoute: ActivatedRoute,
    private nav:NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('articleId');

    this.detail = this.newsService.articles[id];
    this.detail.publishedAt = this.fecha();
    this.title = this.detail.title.split('-')[0].trim();
    this.press = this.detail.title.split('-')[1].trim();
    this.content = (this.detail.content)?this.detail.content.split('[')[0].trim():'###';
  }

  private fecha():string{
    let arrDate = this.detail.publishedAt.split('-'),
        year  = arrDate[0],
        month = arrDate[1],
        day   = arrDate[2].split('T')[0];
    return `${day} - ${month} - ${year}`;
  }

  async openModal(url:string){
    const modal = await this.modalController.create({
      component:ModalPage,
      componentProps:{
        custom_route: url,
        animated:true
      }
    });
    return await modal.present();
  }

}
