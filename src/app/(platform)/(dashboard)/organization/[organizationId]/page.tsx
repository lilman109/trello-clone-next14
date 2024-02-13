import { Separator } from "@/components/ui/separator";
import {
  Info,
} from "@/src/app/(platform)/(dashboard)/organization/_components/index";

const OrganizationIdPage = async () => {
  return (
    <div className="flex flex-col space-y-2">
      <Info />
      <Separator className="my-4" />
      </div>
    </div>
  );
};

export default OrganizationIdPage;
