import HomePage from "@pages/HomePage";
import SettingsPage from "@pages/SettingsPage";

const routes: IRoute[] = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: "/cai-dat",
        exact: true,
        component: SettingsPage,
    },
];

export default routes;
