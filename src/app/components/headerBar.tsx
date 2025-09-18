import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";
import Ticket from "@components/brand/ticket.svg";
import { ColorModeButton } from "@components/ui/color-mode";

function HeaderBarMenuItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      color="link"
      transition="all 0.2s ease-in-out"
      fontSize="lg"
      _hover={{
        textDecoration: "underline",
        transform: "scale(1.05)",
        color: "link-hover",
      }}
    >
      {label}
    </Link>
  );
}

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
        <HStack>
          <Box bg="link" padding="1" borderRadius="lg">
            <Ticket fill={"var(--chakra-colors-link)"} stroke={"var(--chakra-colors-text-primary)"} />
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="text-primary"
            fontFamily="heading"
          >
            Fixline
          </Text>
        </HStack>
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
