export interface ISearchForm {
    query: string
}

export interface IIngredient {
    id: number,
    image: string,
    name: string,
    originalName: string,
    quantity: number,
    unit: string,
    unitMeasure: string,
}

export interface IInstruction {
    equipment: string[],
    ingredients: string[],
    order: number
    step: string
}

export interface IRecipe {
    analyzedInstructions?: IInstruction[],
    dishTypes?: string[],
    extendedIngredients?: IIngredient[],
    id: number,
    image: string,
    imageType: string,
    instructions?: string,
    readyInMinutes?: number,
    servings?: number,
    summary?: string,
    title: string
}

export interface ISearchRecipe {
    onSearch: (params: any) => any
}

export interface IRecipeGrid {
    paramSearch: string
}

export interface RecipeCardArgs {
    recipe: IRecipe
}