import type { Route } from "./+types/register";

import { Register } from "../authentication/register/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
  ];
}

export default function register() {
  return <Register />;
}
