"use client";

import { create } from "@/src/actions/createBoard";
import { useFormState } from "react-dom";
import {
  FormButton,
  FormInput,
} from "@/src/app/(platform)/(dashboard)/organization/_components/index";

export const Form = () => {
  const [state, dispatch] = useFormState(create, undefined);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      <FormButton />
    </form>
  );
};
