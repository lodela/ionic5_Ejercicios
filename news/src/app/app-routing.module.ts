import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  {
    path: 'news',
    children:[
      { path:'', loadChildren: './pages/news/news.module#NewsPageModule' },
      { path:':articleId', loadChildren: './pages/news/article-detail/article-detail.module#ArticleDetailPageModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
