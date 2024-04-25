import { createBrowserRouter } from 'react-router-dom'

import Root from "./Root"
import Login from "./Login"
import Registration from "./Registration"
import Profile from "./Profile"
import NoPage from "./NoPage"

export default createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration",
        element: <Registration />
    },
    {
        path: "/profile/:username?",
        element: <Profile />
    },
    {
        path: "*",
        element: <NoPage />
    }
])