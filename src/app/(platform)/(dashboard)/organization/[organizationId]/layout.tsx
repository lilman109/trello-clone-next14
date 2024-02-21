import { OrgControl } from "@/src/app/(platform)/(dashboard)/organization/_components/index";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { organizationId: string };
}): Promise<Metadata> => {
  const { orgSlug } = auth();

  if (!orgSlug) {
    return {
      title: "Organization",
    };
  }

  return {
    title: `${orgSlug}`,
  };
};

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
