import type { Route } from "./+types/forgotPassword";

import { ForgotPassword } from "../authentication/forgotPassword/forgotPassword";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forgot Password" },
  ];
}

export default function forgotPassword() {
  return <ForgotPassword />;
}
