import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
    Route } from "react-router-dom";
import './assets/style.css';
import { RecipeDetail, loader as loaderRecipeDetail } from "./components/RecipeDetail";
import { ContentLayout } from "./components/layouts/ContentLayout";
import { ErrorPage } from "./components/errors/errorPage";
import {SpoonacularApp} from "./SpoonacularApp";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<ContentLayout />}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route
                    path={"recipes"}
                    element={<SpoonacularApp />}
                />
                <Route
                    path={"recipes/:recipeId"}
                    element={<RecipeDetail />}
                    loader={loaderRecipeDetail}
                />
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
