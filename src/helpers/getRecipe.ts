import type {
    IRecipe, IInstruction, IIngredient
} from '../types/types';

import { infoRecipe } from '../test/testData';

export const getRecipe = async (recipeId: number) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=cdea590a466e4c87877e9bb550091d2d&includeNutrition=false`;
    const resp = await fetch(url);
    const {
             id, title, readyInMinutes, servings,
             image, imageType, summary, dishTypes,
             instructions, analyzedInstructions,
             extendedIngredients
     } = await resp.json();

    //const {
    //    id, title, readyInMinutes, servings,
    //    image, imageType, summary, dishTypes,
    //    instructions, analyzedInstructions,
    //    extendedIngredients
    //} = infoRecipe;

    const stepByStepInstructions: IInstruction[] = analyzedInstructions.map(({ steps }: any) => {
        return steps.map(({ number, step, ingredients, equipment }: any) => {
            const ingredientsByStep: string[] = ingredients.map(({ name }: any) => name);
            const equipmentByStep: string[] = equipment.map(({ name }: any) => name);

            const instruction: IInstruction = {
                equipment: equipmentByStep,
                ingredients: ingredientsByStep,
                order: number,
                step
            }

            return instruction;
        });
    });

    const ingredientsInformation: IIngredient[] = extendedIngredients.map(({ id, image, name, originalName, amount, original, unit }: any) => {
        const ingredient: IIngredient = {
            id,
            image,
            name,
            originalName,
            quantity: amount,
            unit: original,
            unitMeasure: unit
        }

        return ingredient;
    });

    const recipeDetail: IRecipe = {
        id,
        title,
        image,
        imageType,
        summary,
        servings,
        readyInMinutes,
        instructions,
        dishTypes,
        analyzedInstructions: stepByStepInstructions,
        extendedIngredients: ingredientsInformation
    }

    return (recipeDetail);
}