// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import GenericLoader from "../components/generic/GenericLoader";
// import { Pages } from "./routes";

// const NotFound = lazy(() => import("../pages/not-found"));
// const HomePage = lazy(() => import("../pages/home"));
// // TODO: Remove this when going production

// const LOSRouter = () => {
//     <Suspense fallback={<GenericLoader />}>
//         <Routes>
//             <Route path={Pages.home} element={<HomePage />} />
//             <Route path={Pages.pageNotFound} element={<NotFound />} />
//         </Routes>
//     </Suspense>
// };

// export default LOSRouter;

import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";

import GenericLoader from "../components/generic/GenericLoader";

const NotFound = lazy(() => import("../pages/not-found"));
const HomePage = lazy(() => import("../pages/home"));

const config = createBrowserRouter([
    // {
    //     path: routes.login,
    //     element: (
    //         <UnprotectedRoute>
    //             <Login />
    //         </UnprotectedRoute>
    //     ),
    // },
    // {
    //     path: routes.signup,
    //     element: (
    //         <UnprotectedRoute>
    //             <Signup />
    //         </UnprotectedRoute>
    //     ),
    // },
    // {
    //     path: routes.storeHome,
    //     element: (
    //         <ProtectedRoute roles={"*"}>
    //             <Home />
    //         </ProtectedRoute>
    //     ),
    // },
    {
        path: routes.home,
        element: <HomePage />,
    },
    {
        path: routes.pageNotFound,
        element: <NotFound/>,
    },
]);

const Router = () => (
    <Suspense fallback={<GenericLoader />}>
        <RouterProvider future={{ v7_startTransition: true }} router={config} />
    </Suspense>
);

export default Router;