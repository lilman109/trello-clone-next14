import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster position="bottom-right" />
      {children}
    </ClerkProvider>
  );
};

export default ClerkLayout;
