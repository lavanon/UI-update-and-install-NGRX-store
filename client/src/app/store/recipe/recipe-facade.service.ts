import { Observable } from "rxjs";
import { RecipeModel } from "../../../../../shared/models/recipe.model";

export abstract class RecipeFacadeService {
    // abstract recipe$: Observable<RecipeModel | undefined>;
    abstract recipes$: Observable<RecipeModel[] | undefined>;

    abstract updateRecipe( nextRecipe: Partial<RecipeModel>): void;
    abstract getRecipes( recipeId?: string | number): void;
    abstract deleteRecipe( recipeId: string | number): void;
    abstract addRecipe( recipe: RecipeModel): void;
}