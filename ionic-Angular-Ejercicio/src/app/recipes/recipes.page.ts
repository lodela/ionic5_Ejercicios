import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id:'r1',
      title:'Hola Pizza!',
      imageUrl:'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-salami-close-up.jpg',
      ingredients:['french fries', 'Pork Meet', 'Salad']
    },{
      id:'r2',
      title:'Hola Burrito!',
      imageUrl:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ingredients:['Sour Tortillas', 'PorkMeet', 'begetables', 'hot-chili']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  getDetails(even:Event){
    console.log('getDetails clicked', event)
  }

}
