import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

/**
 * The below code is written because of Next.js Hot Reload
 * Whenever we refresh a page or perform any changes
 * this will cause multiple unnecessary connections to establish
 * resulting in warning that's why in development this code will execute
 *
 * The reason we used global this here because it will not get affected by Hot Reload
 */

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
