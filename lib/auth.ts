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
      sendOTP: async ({ phoneNumber, code }, request) => {
        const body = {
          mobile: phoneNumber,
          templateId: 123456,
          parameters: [{ name: "Code", value: code }],
        };
        const res = await fetch(" https://api.sms.ir/v1/send/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "text/plain",
            "x-api-key": process.env.SMS_X_API_KEY as string,
          },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        console.log("data in otp", data);
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
