import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()// This decorator allows to inject anither service to this one (ShoppingListService in this case)
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Roast Beef', 'This is simple description', 'https://img.taste.com.au/cXsZWW0F/taste/2016/11/basic-roast-beef-vegetables-21318-1.jpeg',
        [
            new Ingredient('Beef', 1),
            new Ingredient('French Fries', 20)
        ]
        ),
        new Recipe('Burger', 'This is simple description', 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
        [
            new Ingredient('Beef', 2),
            new Ingredient('Buns', 3),
            new Ingredient('Salad', 1),
            new Ingredient('Cheese', 2)
        ]),
      ];
    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice(); //getting a copy of array
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}