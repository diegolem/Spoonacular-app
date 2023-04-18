import type { IRecipe } from '../types/types';

export const getRecipes = async (param: string, numByPage: number) => {
    //const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=cdea590a466e4c87877e9bb550091d2d&query=${param}&number=${numByPage}`;
    //const resp = await fetch(url);
    //const { results } = await resp.json();

    const results = [
        {
            "id": 654959,
            "title": "Pasta With Tuna",
            "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 511728,
            "title": "Pasta Margherita",
            "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 654857,
            "title": "Pasta On The Border",
            "image": "https://spoonacular.com/recipeImages/654857-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 654883,
            "title": "Pasta Vegetable Soup",
            "image": "https://spoonacular.com/recipeImages/654883-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 654928,
            "title": "Pasta With Italian Sausage",
            "image": "https://spoonacular.com/recipeImages/654928-312x231.jpg",
            "imageType": "jpg"
        },
    ];

    console.log(param);

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