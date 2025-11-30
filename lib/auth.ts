import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { phoneNumber } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
      additionalFields: {
        role: {
          type: "string",
          required: false,
          defaultValue: "USER",
          input: false,
        },
      },
    },
  plugins: [
    phoneNumber({
      expiresIn: 3000,
      sendOTP: ({ phoneNumber, code }, request) => {
        // console.log(request)
        console.log(`successfully sent ${code} to ${phoneNumber}`);
      },
      signUpOnVerification: {
        getTempEmail(phoneNumber) {
          return `${phoneNumber}@gmail.com`;
        },
        getTempName(phoneNumber) {
          return `${phoneNumber}`;
        },
      },
    }),
  ],
});
