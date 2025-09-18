import HeaderBarMenuItem from "@app/components/headerBarMenuItem";
import { Container, HStack, Link } from "@chakra-ui/react";
import CombinationMark from "@components/brand/combinationMark";
import { ColorModeButton } from "@components/ui/color-mode";

export default function HeaderBar() {
  return (
    <Container height="16" display="flex" justifyContent="space-between">
      <Link
        href="/"
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <CombinationMark />
      </Link>

      <HStack gap="4">
        <HeaderBarMenuItem label="Home" href="#home" />
        <HeaderBarMenuItem label="Features" href="#features" />
        <HeaderBarMenuItem label="How it works" href="#how-it-works" />
        <HeaderBarMenuItem label="Testimonials" href="#testimonials" />
        <HeaderBarMenuItem label="Pricing" href="#pricing" />
      </HStack>

      <HStack>
        {/**
         * Todo: Add menu items
         */}
        <ColorModeButton />
      </HStack>
    </Container>
  );
}
