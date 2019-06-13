import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map,filter,mergeMap } from 'rxjs/operators';
import { Articles } from '../pages/news/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url     : string  = 'https://newsapi.org/v2/top-headlines';
  private apiKey  : any     = '2789a2847aca44a4a33f90c232512292';
  private country : string  = 'mx';
  private endPoint: string  = `${this.url}?country=${this.country}&apiKey=${this.apiKey}`;
  public  articles: Articles[];

  constructor(
    private http:HttpClient
  ) { }

  async getNews(){
    return this.http.get<any>(this.endPoint)
                    .toPromise()
                    .then(res => this.articles =  res.articles)
                    .then(data => { return data; });

  }

  searchArticles(): Observable<any>{
    // var data =  this.http.get<any>(this.endPoint)
    //                 .pipe(
    //                   map(result => this.articles = result['articles'])
    //                 )
    var data =  this.http.get<any>(this.endPoint)
                         .pipe(
                           map( res => this.articles=res['articles'] ),
                           filter(d => null !== d.urlToImage)  
                           // map(result => this.articles=result)
                         )
    // var sample = data.pipe( filter(d=>!d.urlToImage))
    //     sample.subscribe(res=>console.log(res));

    // data.subscribe(x => console.log(x));
    return data;
  }
}
