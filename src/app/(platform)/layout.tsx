import { ClerkProvider } from "@clerk/nextjs";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClerkLayout;
