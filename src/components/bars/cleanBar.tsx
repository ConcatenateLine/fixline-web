"use client";

import { Button, Container, HStack, Link } from "@chakra-ui/react";
import CombinationMark from "@components/brand/combinationMark";
import { ColorModeButton } from "@components/ui/color-mode";
import { usePathname } from "next/navigation";

export default function CleanBar() {
  const pathname = usePathname();

  const showOption = (path: string) => {
    return pathname === path ? "none" : "inline";
  };

  return (
    <Container
      height="headerBar"
      display="flex"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      bg="bg-canvas"
    >
      <Link
        href="/"
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <CombinationMark />
      </Link>

      <HStack gap="stack"></HStack>

      <HStack paddingY="iconPadding">
        <Link href="/signIn" display={showOption("/signIn")}>
          <Button variant="outline" rounded="full" borderWidth="2px">
            Sign In
          </Button>
        </Link>
        <Link href="/register" display={showOption("/register")}>
          <Button variant="solid">Get Started</Button>
        </Link>
        <ColorModeButton />
      </HStack>
    </Container>
  );
}
