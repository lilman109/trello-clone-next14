import { z } from "zod";
import { ActionState } from "@/lib/createSafeActions";
import { List } from "@prisma/client";
import { CreateList } from "./schema";

export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>;
