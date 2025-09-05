import type { Route } from "./+types/resetPassword";

import { ResetPassword } from "../authentication/resetPassword/resetPassword";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reset Password" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function resetPassword() {
  return <ResetPassword />;
}
