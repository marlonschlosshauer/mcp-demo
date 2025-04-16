"use server";

import { revalidatePath } from "next/cache";

export const purge = async (path: string) => {
  revalidatePath(path);
};
