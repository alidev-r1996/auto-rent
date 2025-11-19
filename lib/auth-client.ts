// lib/auth-client.ts
import { createAuthClient } from "better-auth/react";
import { phoneNumberClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [phoneNumberClient()],
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
