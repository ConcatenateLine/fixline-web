import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";

function ListMenu({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack>
      <Text
        fontSize="md"
        fontWeight="bold"
        color="var(--chakra-colors-text-primary)"
      >
        {title}
      </Text>
      {children}
    </Stack>
  );
}

export default function Footer() {
  return (
    <Container padding="containerPadding">
      <HStack
        justifyContent="space-between"
        alignItems="start"
        paddingY="section"
      >
        <Stack height="full" width="full">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="var(--chakra-colors-text-primary)"
          >
            Fixline
          </Text>
          <Text
            fontSize="sm"
            color="var(--chakra-colors-text-secondary)"
            width="sm"
          >
            The most intuitive ticket management system designed to streamline
            your customer support operations.
          </Text>
        </Stack>
        <HStack justifyContent="space-around" width="full">
          <ListMenu title="Product">
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              Features
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              Pricing
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              Integrations
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              API
            </Text>
          </ListMenu>
          <ListMenu title="Company">
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              About
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              Blog
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              Careers
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              Contact
            </Text>
          </ListMenu>
        </HStack>
      </HStack>
      <Box
        textAlign="center"
        borderTop="border-subtle"
        paddingY="section"
      >
        <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
          © {new Date().getFullYear()} Fixline. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
}
