import React, { Suspense } from "react";
import { Info } from "../../_components";
import { Separator } from "@/components/ui/separator";
import { ActivityList } from "./_components/activityList";

const ActivityPage = () => {

  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
