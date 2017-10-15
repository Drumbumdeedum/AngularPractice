import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First test recipe',
      'This is a test',
      'http://img.www.nosalty.hu/files/imagecache/recept/recept_kepek/cover_post_20.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 1)
      ]),
    new Recipe(
      'Second test recipe',
      'This is also a test',
      'http://nagyireceptje.com/kepek/hortobagyi-husos-palacsinta-575.jpg',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Apple', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
