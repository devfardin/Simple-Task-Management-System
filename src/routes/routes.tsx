import App from "@/App";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Tasks />,
            },
        ]
    },
])
export default routes;