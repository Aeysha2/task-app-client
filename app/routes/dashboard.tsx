import type { Route } from "./+types/dashboard";

import Home from "./home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forgot Password" },
  ];
}

export default function forgotPassword() {
  return <Home />;
}
