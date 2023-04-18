import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
    Route } from "react-router-dom";
import { SpoonacularApp } from "./SpoonacularApp";
import './assets/style/style.css';
import {RecipeDetail} from "./components/RecipeDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<SpoonacularApp />}
        >
            <Route
                path={"recipe/:recipeId"}
                element={<RecipeDetail />}
            />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
