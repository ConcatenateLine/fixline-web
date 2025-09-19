import { Stack, Text } from "@chakra-ui/react";

export default function MessageSecondary({ message }: { message: string }) {
  return (
    <Stack width="3xl" gap="paragraph" justifyContent="center" alignItems="center">
      <Text textAlign="center" fontSize="2xl" color="text-secondary">
        {message}
      </Text>
    </Stack>
  );
}
