'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from '@/lib/user';
import { db } from '@/lib/db';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  } else {
  }
  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'Email already exist!' };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return { success: 'Account created successfully.' };
};
