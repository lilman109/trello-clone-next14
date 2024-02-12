"use client";

import { createBoard } from "@/src/actions/createBoard";
import {
  FormButton,
  FormInput,
} from "@/src/app/(platform)/(dashboard)/organization/_components/index";
import { useAction } from "@/src/hooks/useAction";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
      <FormButton />
    </form>
  );
};
