import { type RouteConfig, index, route, } from "@react-router/dev/routes";

export default [
    index("routes/login.tsx"),
    route("register","routes/register.tsx"),
    route("forgotPassword","routes/forgotPassword.tsx"),
    route("resetPassword","routes/resetPassword.tsx"),
    route("home","routes/home.tsx")
] satisfies RouteConfig;
