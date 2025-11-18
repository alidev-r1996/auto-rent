// lib/auth-client.ts
import { createAuthClient } from "better-auth/react";
import { phoneNumberClient } from "better-auth/client/plugins";
import { emailOTPClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  plugins: [phoneNumberClient(), emailOTPClient()],
});

export const {
  signIn,
  signOut,
  signUp,
  getSession,
  useSession,
  phoneNumber,
  updateUser,
  changePassword,
} = authClient;
