import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Articles } from './news.model';
import { NewsService } from '../../services/news.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: Articles[] = [];

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.getArticles();
  }

// ------------------------opcion 1------------------------//
// ----------------------  promises  ----------------------//
  // async getArticles(){
  //   this.newsService.getNews()
  //                   .then(news => this.articles = news);
  // }


// ------------------------opcion 2------------------------//
// ---------------------- observable ----------------------//
  getArticles(){
    this.newsService.searchArticles()
                    .subscribe((response)=>this.articles = response)
  }

  label(title:string){
    let arrTitle = title.split('-');
    let resp = [arrTitle[0].trim(),arrTitle[1]];
    return resp;
  }
}
