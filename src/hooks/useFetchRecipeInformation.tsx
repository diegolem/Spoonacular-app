import { useEffect, useState } from "react";
import { getRecipe } from "../helpers/getRecipe";

import type {
    IRecipe
} from '../types/types';

export const useFetchRecipeInformation = (recipeId: number) => {
    const [recipe, setRecipe] = useState<IRecipe>();

    const getRecipeInfo = async (recipeId: number) => {
        const recipeInfo:IRecipe = await getRecipe(recipeId);
        setRecipe(recipeInfo);
    }

    useEffect(() => {
        getRecipeInfo(recipeId).then(r => null);
    }, []);

    return {
        recipe
    }
}