import { SignIn } from "@clerk/nextjs";

export default function Page() {
  console.log("signin page");
  return <SignIn />;
}
