import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Salat Provonce', 'Salat with herbs from the Provence', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('Cheeseburger', 'Fancy cheeseburger', 'http://images.media-allrecipes.com/images/58656.png'),
    new Recipe('Pasta', 'Spiralia pasta with tomatos', 'http://organicvillefoods.com/wp-content/themes/organicville/images/cat-head-image-recipes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
