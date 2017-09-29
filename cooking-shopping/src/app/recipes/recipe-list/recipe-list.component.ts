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
    new Recipe('First test recipe', 'This is a test', 'http://img.www.nosalty.hu/files/imagecache/recept/recept_kepek/cover_post_20.jpg'),
    new Recipe('Second test recipe', 'This is also a test', 'http://nagyireceptje.com/kepek/hortobagyi-husos-palacsinta-575.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
