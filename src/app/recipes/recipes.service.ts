import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Array<Recipe> = [
    {
      id: '0',
      title: 'Biryani',
      imageUrl: 'https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg',
      ingredients: [
        'Rice',
        'Meat',
        'Salt',
        'Spices',
        'Water',
      ],
    },
    {
      id: '1',
      title: 'Black Tea',
      imageUrl: 'https://www.foodandwine.com/thmb/hChW29M1xYUVTb56ImlKxiXo0Xg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg',
      ingredients: [
        'Tea',
        'Sugar',
        'Water',
      ],
    },
  ]

  constructor() {}

  all() {
    return [...this.recipes];
  }

  find(id: string): Recipe {
    return {
      ...this.recipes.find(recipe => recipe.id === id) as Recipe
    };
  }

  delete(id?: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    console.log(this.recipes);
  }
}
