import { z } from "zod";
import { ActionState } from "@/lib/createSafeActions";
import { Board } from "@prisma/client";
import { UpdateBoard } from "./schema";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
