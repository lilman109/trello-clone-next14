"use client";

import { Button } from "@/src/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" variant="destructive" size="sm">
      Delete
    </Button>
  );
};
