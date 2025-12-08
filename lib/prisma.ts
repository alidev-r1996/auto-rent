// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // allow global var in dev to persist across HMR
  // eslint-disable-next-line no-var
  var __prisma__: PrismaClient | undefined;
}

const prisma = global.__prisma__ ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.__prisma__ = prisma;
}

export default prisma;
