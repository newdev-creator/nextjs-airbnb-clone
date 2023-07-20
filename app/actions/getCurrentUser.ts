import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSesion() {
  return await getServerSession(authOptions);
}

// TODO: 2:20:00
