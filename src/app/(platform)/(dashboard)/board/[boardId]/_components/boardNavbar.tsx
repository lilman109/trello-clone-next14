import { Board } from "@prisma/client";
import BoardTtileForm from "./boardTtileForm";

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTtileForm data={data} />
    </div>
  );
};
