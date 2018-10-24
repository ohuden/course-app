import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { 
        path: '', redirectTo: '/recipes', pathMatch: 'full'//only redirect if full path is empty
    },
    {
        path: 'recipes', component: RecipesComponent
    },
    {
        path: 'shopping-list', component: ShoppingListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}