import {Recipe} from './recipe.model';
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First test recipe', 'This is a test', 'http://img.www.nosalty.hu/files/imagecache/recept/recept_kepek/cover_post_20.jpg'),
    new Recipe('Second test recipe', 'This is also a test', 'http://nagyireceptje.com/kepek/hortobagyi-husos-palacsinta-575.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
