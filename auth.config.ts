import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';

import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/lib/user';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          /**
         *If there is no user or the user has logged in through Github or Google
         then break the function because we need to match the hashed password
         */
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
