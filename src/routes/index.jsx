import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/Home";
import Explore from "~/pages/explore";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";

const routes = createBrowserRouter([
    {
        "path": "/",
        element: <MainLayout />,
        children: [
            {
                "index": "true",
                element: <Home />,
            },
            {
                "path": "/explore",
                element: <Explore />,
            },
            {
                "path": "/notifications",
                element: <Notifications />,
            },
        ]
    },
    
]);
export default routes;