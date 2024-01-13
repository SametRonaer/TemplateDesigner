import { createBrowserRouter } from "react-router-dom";
import DesignPage from "../Pages/DesignPage/DesignPage";

const router = createBrowserRouter([
    {
    path: '/',
    element: <DesignPage/>
    }
]);


  export default router;