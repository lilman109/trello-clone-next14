"use client";

import { FormInput, FormSubmit } from "@/components/form";
import { createBoard } from "@/src/actions/createBoard";
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
      <FormInput id="title" label="Board Input" errors={fieldErrors} />
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
