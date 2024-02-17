"use server";

import { createSafeAction } from "@/lib/createSafeActions";
import { InputType, ReturnType } from "./type";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML
  ) {
    return {
      error: "Missing fields. Failed to create board.",
    };
  }

  console.log({
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageUserName,
    imageLinkHTML,
  });

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create board",
    };
  }

  revalidatePath(`/board/${board.id}`);

  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);

// alternative way
/* "use server"; */
/**/
/* import { z } from "zod"; */
/* import { db } from "@/src/lib/db"; */
/* import { revalidatePath } from "next/cache"; */
/* import { redirect } from "next/navigation"; */
/**/
/* export type State = { */
/*   errors?: { */
/*     title?: string[]; */
/*   }; */
/*   message?: string | null; */
/* }; */
/**/
/* const CreateBoard = z.object({ */
/*   title: z.string().min(3, { message: "Minimum of 3 letters required" }), */
/* }); */
/**/
/* export async function create(prevState: State | undefined, formData: FormData) { */
/*   const validatedFields = CreateBoard.safeParse({ */
/*     title: formData.get("title"), */
/*   }); */
/**/
/*   if (!validatedFields.success) { */
/*     return { */
/*       errors: validatedFields.error.flatten().fieldErrors, */
/*       message: "Missing Fields", */
/*     }; */
/*   } */
/**/
/*   const { title } = validatedFields.data; */
/**/
/*   try { */
/*     await db.board.create({ */
/*       data: { */
/*         title, */
/*       }, */
/*     }); */
/*   } catch (error) { */
/*     return { */
/*       message: "Database error", */
/*     }; */
/*   } */
/**/
/*   revalidatePath("/organization/org_2c1Wscy0vCWXzPYWzKGHR7cDcCv"); */
/*   redirect("/organization/org_2c1Wscy0vCWXzPYWzKGHR7cDcCv"); */
/* } */
/**/
