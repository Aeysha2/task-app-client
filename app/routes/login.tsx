import type { Route } from "./+types/login";

import { Login } from "../authentication/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function login() {
  return <Login />;
}
