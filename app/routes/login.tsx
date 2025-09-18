import type { Route } from "./+types/login";

import { Login } from "../authentication/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
  ];
}

export default function login() {
  return <Login />;
}
