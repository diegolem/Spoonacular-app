export interface ISearchForm {
    query: string
}

export interface IRecipe {
    id: number,
    title: string,
    image: string,
    imageType: string
}

export interface ISearchRecipe {
    onSearch: (params: any) => any
}

export interface IRecipeGrid {
    paramSearch: string
}