import { Stack, Text } from "@chakra-ui/react";

interface TitleBicolorProps {
  primaryText: string;
  secondaryText: string;
}

export default function TitleBicolor({
  primaryText,
  secondaryText,
}: TitleBicolorProps) {
  return (
    <Stack gap="paragraph" alignItems="center">
      <Text fontSize="7xl" fontWeight="bold" color="text-primary">
        {primaryText}
      </Text>
      <Text fontSize="7xl" fontWeight="bold" color="link">
        {secondaryText}
      </Text>
    </Stack>
  );
}
