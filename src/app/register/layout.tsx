import CleanBar from "@components/bars/cleanBar";
import BaseLayout from "@components/ui/baseLayout";

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout headerBar={<CleanBar />}>{children}</BaseLayout>;
}
