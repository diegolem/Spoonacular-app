export const getRecipes = async (param: string, numByPage: number) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${param}&number=${numByPage}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);
}