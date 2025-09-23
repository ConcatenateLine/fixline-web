import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface LayoutProps {
  headerBar: ReactNode;
  children: ReactNode;
}

export default function SecondaryLayout({
  headerBar,
  children,
}: Readonly<LayoutProps>) {
  return (
    <Box minHeight="100%" bg="bg-canvas">
      {headerBar}
      {children}
    </Box>
  );
}
