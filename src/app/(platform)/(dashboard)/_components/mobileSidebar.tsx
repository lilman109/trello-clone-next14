"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/src/hooks/useMobileSidbar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  /* const [isMounted, setIsMounted] = useState(false)  hydration error */

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  // if hydration error;
  /* useEffect(() => { */
  /*   setIsMounted(true) */
  /* }, []); */

  /*  if (!isMounted) { */
  /*   return null */
  /* } */

  useEffect(() => {
    onClose;
  }, [pathname, onClose]);

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left">
          <Sidebar storageKey="t-sidebar-mobile" />
        </SheetContent>
      </Sheet>
    </>
  );
};
