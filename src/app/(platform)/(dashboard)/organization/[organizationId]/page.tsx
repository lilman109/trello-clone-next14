import { Separator } from "@/components/ui/separator";
import {
  BoardList,
  Info,
} from "@/src/app/(platform)/(dashboard)/organization/_components/index";

const OrganizationIdPage = async () => {
  return (
    <div className="flex flex-col space-y-2">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-2">
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage;

/* import { db } from "@/src/lib/db"; */
/* import { */
/*   Board, */
/*   Form, */
/* } from "@/src/app/(platform)/(dashboard)/organization/_components/index"; */
/**/
/* const OrganizationIdPage = async () => { */
/*   const boards = await db.board.findMany({}); */
/*   return ( */
/*     <div className="flex flex-col space-y-2"> */
/*       <Form /> */
/*       <div className="space-y-2"> */
/*         {boards.map((board) => ( */
/*           <Board key={board.title} id={board.id} title={board.title} /> */
/*         ))} */
/*       </div> */
/*     </div> */
/*   ); */
/* }; */
/**/
/* export default OrganizationIdPage; */
