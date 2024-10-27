"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

type LoginDataType = {
  email: string;
  password: string;
};

export const handelLogin = async (data: LoginDataType) => {
  "use server";
  const response = await signIn("credentials", data, {
    redirectTo: "/dashboard",
  });
  console.log("🚀 ~ handelLogin ~ response:", response);

  if (response) {
    redirect("/dashboard");
  }
  console.log("🚀 ~ handelLogin ~ data:", response);
};

export const handelGoogleLogin = async () => {
  const response = await signIn("google");
  console.log("🚀 ~ handelLogin ~ response:", response);

  if (response) {
    redirect("/dashboard");
  }
  console.log("🚀 ~ handelLogin ~ data:", response);
};
