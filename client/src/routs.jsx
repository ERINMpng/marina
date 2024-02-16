import { ShopRouter, HomeRouter } from "./utils/const";
import ShopPage from "./compon/ShopPage";
import HomePage from "./compon/homePage";
export const publicRoutes = [
    {
        path: ShopRouter,
        Element: ShopPage
    },
    {
        path: HomeRouter,
        Element: HomePage
    },
]
// export privateRoutes = [
//     {

//     },
// ]