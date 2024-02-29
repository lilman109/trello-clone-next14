import { ModalProvider } from "@/components/providers/modalProvider";
import { QueryProvider } from "@/components/providers/queryProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
      <Toaster position="bottom-right" />
      <ModalProvider />
      {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default ClerkLayout;
