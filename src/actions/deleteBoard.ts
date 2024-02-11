"use server";

import { db } from "@/src/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2c1Wscy0vCWXzPYWzKGHR7cDcCv");
}
