import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
    Route } from "react-router-dom";
import { SpoonacularApp } from "./SpoonacularApp";
import './assets/style.css';
import { RecipeDetail, loader as loaderRecipeDetail } from "./components/RecipeDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/recipe"
            element={<SpoonacularApp />}
        >
            <Route
                path={":recipeId"}
                element={<RecipeDetail />}
                loader={loaderRecipeDetail}
            />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
