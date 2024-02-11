import { create } from "@/src/actions/createBoard";
import { Button } from "@/src/components/ui/button";
import { db } from "@/src/lib/db";
import { Board } from "@/src/app/(platform)/(dashboard)/organization/_components/index";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany({});
  return (
    <div className="flex flex-col space-y-2">
      <form action={create}>
        <input
          id="title"
          name="title"
          placeholder="Input title"
          required
          className="border-black border p-1"
        />
        <Button type="submit">submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
