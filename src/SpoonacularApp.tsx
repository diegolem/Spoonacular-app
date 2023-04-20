import { SearchRecipes} from "./components/SearchRecipes";
import { useState } from "react";
import { RecipeGrid } from "./components/RecipeGrid";
import { Divider } from "antd";

export const SpoonacularApp: Function = () => {
    const [recipes, setRecipes] = useState<string[]>([]);
    const onSearchRecipe = (query: string) => {
        if(recipes?.includes(query)) return;

        setRecipes([ query, ...recipes ]);
    }

    return (
        <>
            <SearchRecipes
                onSearch={ onSearchRecipe }
            />

            { recipes.map(recipe => (
                <RecipeGrid
                    key={recipe}
                    paramSearch={recipe}
                />
            )) }
        </>
    );
};