import type { Route } from "./+types/resetPassword";

import { ResetPassword } from "../authentication/resetPassword/resetPassword";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reset Password" },
  ];
}

export default function resetPassword() {
  return <ResetPassword />;
}
