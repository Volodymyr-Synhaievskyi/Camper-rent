import {createBrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CatalogPage} from "./pages/CatalogPage";
import {FavoritesPage} from "./pages/FavoritesPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'camper-rental'}/>
            },
            {
                path: '/camper-rental', element: <HomePage/>
            },
            {
                path: '/catalog', element: <CatalogPage/>
            },
            {
                path: '/favorites', element: <FavoritesPage/>
            },
            {
                path: '*', element: <Navigate to='/camper-rental'/>
            }
        ]
    }
]);

export {
    router
}
