"use server";

import { createSafeAction } from "@/lib/createSafeActions";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { DeleteList } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, boardId } = data;
  let list;

  try {
    list = await db.list.delete({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
    });
  } catch (error) {
    return {
      error: "Failed to update board",
    };
  }

  revalidatePath(`/board/${boardId}`);

  return { data: list };
};

export const deleteList = createSafeAction(DeleteList, handler);