import { useEffect, useState } from "react";
import { getRecipes } from "../helpers/getRecipes";

import type {
    IRecipe
} from '../types/types';

export const useFetchRecipes = (searchParam: string) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const pagination = 10;

    const getRecipesByParams = async (searchParam: string, pagination: number) => {
        const newRecipes:IRecipe[] = await getRecipes(searchParam, pagination);
        setRecipes(newRecipes);
        setIsLoading(false);
    }

    useEffect(() => {
        getRecipesByParams(searchParam, pagination).then(r => null);
    }, []);

    return {
        recipes,
        isLoading
    }
}