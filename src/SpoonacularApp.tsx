import { SearchRecipes} from "./components/SearchRecipes";
import {useState} from "react";
import { RecipeGrid } from "./components/RecipeGrid";
import {useNavigate} from "react-router-dom";
import { Divider } from "antd";

export const SpoonacularApp: Function = () => {
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState<string[]>([]);
    const [lookingDetail , setLookingDetail ] = useState<boolean>(false);

    const onSearchRecipe = (query: string) => {
        if(recipes?.includes(query)) return;

        setRecipes([ query, ...recipes ]);
    }

    const handleActionDetail = (state: boolean) => {
        if(!state) navigate(-1);
        setLookingDetail(state);
    }

    return (
        <>
            <h2>Spoonacular - App</h2>
            <Divider />
            { !(lookingDetail) && (
                <SearchRecipes
                    onSearch={ onSearchRecipe }
                />
            )}

            { recipes.map(recipe => (
                <RecipeGrid
                    key={recipe}
                    paramSearch={recipe}
                    handleActionDetail={handleActionDetail}
                    lookingDetail={lookingDetail}
                />
            )) }
        </>
    );
};