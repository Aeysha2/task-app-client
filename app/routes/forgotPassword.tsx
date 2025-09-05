import type { Route } from "./+types/forgotPassword";

import { ForgotPassword } from "../authentication/forgotPassword/forgotPassword";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ForgotPassword" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function forgotPassword() {
  return <ForgotPassword />;
}
