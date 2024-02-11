import { deleteBoard } from "@/src/actions/deleteBoard";
import React from "react";
import { FormDelete } from "@/src/app/(platform)/(dashboard)/organization/_components/index";

type BoardProps = {
  title: string;
  id: string;
};

export const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <div className="flex justify-between items-center gap-x-2">
      <div key={id}>Board Title: {title}</div>
      <form action={deleteBoardWithId}>
        <FormDelete />
      </form>
    </div>
  );
};
