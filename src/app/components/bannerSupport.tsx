import { Button, Container, HStack, Stack, Text } from "@chakra-ui/react";

export default function BannerSupport() {
  return (
    <Container
      padding="20"
      bg="var(--chakra-colors-primary-accent)"
      marginY="page"
    >
      <Stack gap="stack" alignItems="center">
        <Text fontSize="5xl" fontWeight="bold">
          Ready to Transform Your Support?
        </Text>
        <Text fontSize="xl" width="2xl" textAlign="center">
          Join thousands of companies already using our platform to deliver
          exceptional customer support.
        </Text>

        <HStack gap="stack">
          <Button variant="solid" size="2xl" rounded="xl">
            Start a chat
          </Button>
          <Button variant="outline" size="2xl" rounded="xl" borderWidth="2px">
            Schedule a Demo
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}
