"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { useFormStatus } from "react-dom";

export type FormInputProps = {
  errors?: {
    title?: string[];
  };
};

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Input
        id="title"
        name="title"
        placeholder="Input title"
        disabled={pending}
      />
      {errors?.title && (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
