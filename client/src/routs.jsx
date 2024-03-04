import { ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter } from "./utils/const";
import ShopPage from "./compon/ShopPage";
import HomePage from "./compon/homePage";
import AuthPage from "./compon/AuthPage";
import RegisterPage from "./compon/RegisterPage";
import HelpPage from "./compon/help";

export const publicRoutes = [
    {
        path: ShopRouter,
        Element: ShopPage
    },
    {
        path: HomeRouter,
        Element: HomePage
    },
    {
        path: RegisterRouter,
        Element: RegisterPage
    },
    {
        path: AuthRouter,
        Element: AuthPage
    },
    {
        path: HelpRouter,
        Element: HelpPage
    },
]