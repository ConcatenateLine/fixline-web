import { Button, Container, HStack, Stack, Text } from "@chakra-ui/react";

export default function BannerAction() {
  return (
    <Container padding="containerPadding">
      <Stack
        bg="secondary-accent"
        borderRadius="lg"
        gap="stack"
        alignItems="center"
        textAlign="center"
        padding="containerPadding"
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="var(--chakra-colors-text-primary)"
        >
          Ready to see these features in action?
        </Text>
        <Text fontSize="lg" color="var(--chakra-colors-text-secondary)">
          Join thousands of companies who have transformed their customer
          support with our platform.
        </Text>
        <HStack gap="stack">
          <Button
            variant="solid"
            size="2xl"
            rounded="xl"
            bg="link"
            _hover={{ bg: "link-hover" }}
          >
            Start Free Trial
          </Button>
          <Button variant="outline" size="2xl" rounded="xl" borderWidth="2px">
            Watch Demo
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}
