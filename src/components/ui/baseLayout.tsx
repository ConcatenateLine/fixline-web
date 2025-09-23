import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface LayoutProps {
  headerBar: ReactNode;
  children: ReactNode;
}

export default function BaseLayout({ headerBar, children }: Readonly<LayoutProps>) {
  return (
    <Box minHeight="100vh" bg="bg-canvas" paddingTop="headerBar">
      {headerBar}
      {children}
    </Box>
  );
}
