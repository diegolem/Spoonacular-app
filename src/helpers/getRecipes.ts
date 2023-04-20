import type { IRecipe } from '../types/types';

import { recipesData } from '../test/testData';

export const getRecipes = async (param: string, numByPage: number) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=cdea590a466e4c87877e9bb550091d2d&query=${param}&number=${numByPage}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    //const results = recipesData;

    return results.map(({ id, title, image, imageType }: IRecipe) => {
        const newRecipe:IRecipe = {
            id,
            title,
            image,
            imageType
        }

        return (newRecipe);
    });
}