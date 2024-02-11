import { deleteBoard } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";
import React from "react";

type BoardProps = {
  title: string;
  id: string;
};

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <div className="flex justify-between items-center">
      <div key={id}>Board Title: {title}</div>
      <form action={deleteBoardWithId}>
        <Button type="submit" variant="destructive" size="sm">
          Delete
        </Button>
      </form>
    </div>
  );
};

export default Board;
